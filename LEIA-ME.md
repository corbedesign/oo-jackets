# Oakley H2'26 — como completar o site

## O que tem aqui
```
index.html              o site (não precisa mexer)
products.js             TODOS os produtos: nome, código, preço, tags, cores. É aqui que se corrige qualquer dado
fotos.js                gerado sozinho pelo converter.py (diz ao site quais fotos já existem)
converter.py            converte as fotos para o formato certo e põe cada uma na pasta certa
converter.command        no Mac: duplo clique para converter (instala o que precisa sozinho)
produtos-checklist.csv  1 linha por produto (204), com o nome exato do arquivo de cada foto
img/                    fotos prontas, separadas por seção e grupo (capsulas/cyberflora, apparel/camisetas...)
_originais/             onde VOCÊ joga as fotos baixadas. Não vai pro GitHub
fonts/  media/          fontes e vídeos (bg-l/bg-p .webm/.mp4, poster-l/poster-p .jpg e LOADING.webm/.mp4 (maiúsculas, como estão na repo), a tela de loading só no celular: 3 s mínimos, só sai com fontes e página prontas)
```

## Colocar as fotos (3 passos)
1. **Uma foto por produto já basta** (204 no total, uma linha de cada no `produtos-checklist.csv`). Foto por cor é opcional e fica fora do checklist. Baixe e salve em `_originais/` com o **código do produto** no nome:
   - `FOA408019.jpg` → foto principal
   - `FOA408019_02E.jpg` → foto da cor **02E** (o código de cada cor está no `products.js`, no campo `cores`)
   - Escolha como principal a cor que melhor representa o produto (ex.: a preta). Sem fotos de cor, o site mostra os nomes das cores só como texto; os botões de cor aparecem sozinhos quando existe foto de alguma cor.
   - PNG, JPG, WebP ou AVIF, qualquer tamanho. Pode ter subpastas.
2. Rode uma vez `pip3 install --upgrade pillow` (precisa do Pillow 11.3+) e depois, na pasta do projeto:
   ```
   No Mac: duplo clique em converter.command (1ª vez: botão direito > Abrir). Ou no Terminal: python3 converter.py
   ```
3. Pronto. **O site mostra só os produtos que têm foto**: sem foto, sem card (grupos e seções sem nenhuma foto somem junto, e os contadores se ajustam). Enquanto nenhuma foto tiver sido convertida, o site entra em modo demonstração e mostra tudo com placeholder. Ele converte, coloca em `img/<grupo>/` e atualiza o `fotos.js`. Pode rodar quantas vezes quiser: só converte o que é novo.
   - `python3 converter.py --status` mostra o que ainda falta.
   - Erros de nome (código errado, cor que não existe) aparecem na tela com um `?`.

## Formato das imagens
- **AVIF** (principal) + **WebP** (reserva automática). AVIF abre em Chrome, Edge, Firefox e Safari 16+ (iPhone com iOS 16 ou mais novo). Quem não suporta recebe o WebP sozinho.
- **Quadrado (1:1), até 800 × 800 px**, o mesmo formato do card. Foto quadrada entra direto; foto de outra proporção entra **inteira** (nada é cortado) e a sobra é preenchida com a cor do fundo dela. Foto menor que 800 px não é ampliada, só reduzida quando maior.
- Cada foto fica com ~20 a 60 KB. Fotos do site da Oakley (3000 × 3000) são perfeitas.

## Corrigir ou acrescentar produto
Edite o `products.js`, uma linha por produto:
```
{"c":"FOA408020","n":"Cyberflora Metal Blossom SS Tee","p":"229,90","f":"Oversized","novo":1,"ex":"Morumbi","cores":[{"k":"02E","n":"Blackout"}]}
```
`c` código · `n` nome · `p` preço · `f` modelagem · `novo:1` · `lim:1` edição limitada · `ex` só em loja ("Morumbi" ou "Morumbi + Dom Pedro") · `exc` cor exclusiva · `cores` variações.
Produto novo: acrescente na linha do grupo certo e rode `python3 converter.py` (ele relê o arquivo).

## GitHub Pages
Suba tudo, **menos** o conteúdo de `_originais/` (já está no `.gitignore`). As pastas `img/`, `fonts/` e `media/` precisam ir junto, e os nomes de arquivo respeitam maiúsculas e minúsculas.
