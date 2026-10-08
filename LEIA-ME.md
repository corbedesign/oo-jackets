# Oakley H2'26 — como completar o site

## O que tem aqui
```
index.html              o site (não precisa mexer)
products.js             TODOS os produtos: nome, código, preço, tags, cores. É aqui que se corrige qualquer dado
fotos.js                gerado sozinho pelo converter.py (diz ao site quais fotos já existem)
converter.py            converte as fotos para o formato certo e põe cada uma na pasta certa
produtos-checklist.csv  lista de tudo que precisa de foto (350 linhas = 204 produtos + variações de cor)
img/                    fotos prontas, separadas por seção e grupo (capsulas/cyberflora, apparel/camisetas...)
_originais/             onde VOCÊ joga as fotos baixadas. Não vai pro GitHub
fonts/  media/          fontes e vídeo de fundo (bg-l/bg-p .webm/.mp4 e poster-l/poster-p .jpg)
```

## Colocar as fotos (3 passos)
1. Baixe a foto de cada produto e salve em `_originais/` com o **código do produto** no nome:
   - `FOA408019.jpg` → foto principal
   - `FOA408019_02E.jpg` → foto da cor **02E** (o código da cor está no `produtos-checklist.csv`)
   - A foto principal vale como a **primeira cor** da lista. Se um produto só tem uma cor, basta a principal.
   - PNG, JPG, WebP ou AVIF, qualquer tamanho. Pode ter subpastas.
2. Rode uma vez `pip3 install --upgrade pillow` (precisa do Pillow 11.3+) e depois, na pasta do projeto:
   ```
   python3 converter.py
   ```
3. Pronto. Ele converte, coloca em `img/<grupo>/` e atualiza o `fotos.js`. Pode rodar quantas vezes quiser: só converte o que é novo.
   - `python3 converter.py --status` mostra o que ainda falta.
   - Erros de nome (código errado, cor que não existe) aparecem na tela com um `?`.

## Formato das imagens
- **AVIF** (principal) + **WebP** (reserva automática). AVIF abre em Chrome, Edge, Firefox e Safari 16+ (iPhone com iOS 16 ou mais novo). Quem não suporta recebe o WebP sozinho.
- **800 × 1000 px (proporção 4:5)**, o mesmo quadro do card. A foto entra **inteira** (nada é cortado) e a sobra é preenchida com a cor do fundo da própria foto. Por isso o ideal é foto de estúdio com fundo liso.
- Cada foto fica com ~30 a 80 KB.

## Corrigir ou acrescentar produto
Edite o `products.js`, uma linha por produto:
```
{"c":"FOA408020","n":"Cyberflora Metal Blossom SS Tee","p":"229,90","f":"Oversized","novo":1,"ex":"Morumbi","cores":[{"k":"02E","n":"Blackout"}]}
```
`c` código · `n` nome · `p` preço · `f` modelagem · `novo:1` · `lim:1` edição limitada · `ex` só em loja ("Morumbi" ou "Morumbi + Dom Pedro") · `exc` cor exclusiva · `cores` variações.
Produto novo: acrescente na linha do grupo certo e rode `python3 converter.py` (ele relê o arquivo).

## GitHub Pages
Suba tudo, **menos** o conteúdo de `_originais/` (já está no `.gitignore`). As pastas `img/`, `fonts/` e `media/` precisam ir junto, e os nomes de arquivo respeitam maiúsculas e minúsculas.
