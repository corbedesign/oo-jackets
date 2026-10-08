#!/usr/bin/env python3
"""Converte as fotos dos produtos para AVIF + WebP (quadrado, até 800x800), põe cada uma na pasta certa
e atualiza o fotos.js, que diz ao site quais fotos já existem.

COMO USAR
  1. Instale uma vez:        pip3 install --upgrade pillow      (precisa do Pillow 11.3 ou mais novo: já vem com AVIF)
  2. Jogue as fotos em  _originais/  (pode ter subpastas), com o CÓDIGO do produto no nome:
         FOA408019.jpg                  foto principal do produto
         FOA408019_02E.jpg              foto da cor 02E (o código da cor está no produtos-checklist.csv)
     PNG, JPG, WebP e AVIF servem. Maiúsculas ou minúsculas, tanto faz.
  3. Rode:                   python3 converter.py
  4. Pronto: saem  img/<pasta do grupo>/CÓDIGO.avif  e  .webp, e o fotos.js é atualizado.

OPÇÕES
  python3 converter.py --status    mostra o que ainda falta, sem converter nada
  python3 converter.py --force     refaz todas as fotos, mesmo as já convertidas

A foto é encaixada INTEIRA num quadrado (nada é cortado). Se não for quadrada, a sobra é preenchida com a cor do fundo da própria foto.
Fotos menores que 800 px NÃO são ampliadas (ficam no tamanho original); as maiores são reduzidas para 800 px.
"""
import json, sys
from pathlib import Path
from PIL import Image, ImageOps

S = 800  # lado maximo do quadrado, em px
AVIF_Q, WEBP_Q = 55, 82
ROOT = Path(__file__).parent
raw = (ROOT / "products.js").read_text(encoding="utf-8")
data = json.loads(raw[raw.index("const CATALOGO=") + 15 : raw.rindex("];") + 1])
mapa, cores = {}, {}
for s in data:
    for g in s["grupos"]:
        for i in g["itens"]:
            mapa[i["c"].upper()] = g["grupo"]["dir"]
            cores[i["c"].upper()] = [c["k"].upper() for c in i.get("cores", [])]

force, so_status = "--force" in sys.argv, "--status" in sys.argv


def fundo(im):
    """Cor do fundo = mediana dos 4 cantos."""
    w, h = im.size
    px = [im.getpixel(p) for p in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]]
    return tuple(sorted(c[k] for c in px)[2] for k in range(3))


def existentes():
    f = {}
    for c, d in mapa.items():
        for v in [""] + cores[c]:
            nome = c + ("_" + v if v else "")
            if (ROOT / "img" / d / f"{nome}.avif").exists() and (ROOT / "img" / d / f"{nome}.webp").exists():
                f.setdefault(c, []).append(v)
    return f


if not so_status:
    EXT = {".png", ".jpg", ".jpeg", ".webp", ".tif", ".tiff", ".avif"}
    orig = sorted(p for p in (ROOT / "_originais").rglob("*") if p.suffix.lower() in EXT)
    if not orig:
        print("Nenhuma foto em _originais/. Coloque as imagens lá e rode de novo.")
    for p in orig:
        partes = p.stem.upper().split("_")
        c, v = partes[0], (partes[1] if len(partes) > 1 else "")
        if c not in mapa:
            print(f"  ?  {p.name}: código desconhecido (confira o nome do arquivo)")
            continue
        if v and v not in cores[c]:
            print(f"  ?  {p.name}: a cor {v} não existe para {c} (cores: {', '.join(cores[c]) or 'nenhuma'})")
            continue
        out = ROOT / "img" / mapa[c]
        out.mkdir(parents=True, exist_ok=True)
        nome = c + ("_" + v if v else "")
        dest = out / f"{nome}.avif"
        if dest.exists() and not force and dest.stat().st_mtime >= p.stat().st_mtime:
            continue
        im = ImageOps.exif_transpose(Image.open(p))
        if im.mode in ("RGBA", "LA", "P"):
            base = Image.new("RGB", im.size, (255, 255, 255))
            rgba = im.convert("RGBA")
            base.paste(rgba, mask=rgba.split()[-1])
            im = base
        im = im.convert("RGB")
        lado = min(S, max(im.size))
        fit = ImageOps.contain(im, (lado, lado), Image.LANCZOS)
        tela = Image.new("RGB", (lado, lado), fundo(im))
        tela.paste(fit, ((lado - fit.width) // 2, (lado - fit.height) // 2))
        tela.save(dest, quality=AVIF_Q)
        tela.save(out / f"{nome}.webp", quality=WEBP_Q, method=6)
        print(f"  ok {nome:22s} -> img/{mapa[c]}/   ({dest.stat().st_size // 1024} KB)")

feitos = existentes()
(ROOT / "fotos.js").write_text(
    "/* Gerado automaticamente pelo converter.py. Lista quais fotos existem. */\nconst FOTOS=" + json.dumps(feitos, separators=(",", ":")) + ";\n",
    encoding="utf-8",
)
falta = [c for c in mapa if c not in feitos]
print(f"\n{len(feitos)} de {len(mapa)} produtos com foto principal. Faltam {len(falta)}.")
if so_status:
    for c in falta:
        print("  -", c, "(" + mapa[c] + ")")
