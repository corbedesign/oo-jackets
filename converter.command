#!/bin/bash
# Duplo clique para converter as fotos de _originais/ e atualizar o fotos.js.
cd "$(dirname "$0")" || exit 1

pausa() { echo; read -n 1 -s -r -p "Pressione qualquer tecla para fechar..."; }

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 não encontrado."
  echo "Instale rodando no Terminal:  xcode-select --install   (ou baixe em python.org)"
  pausa; exit 1
fi

# ambiente próprio na pasta (.venv), para não mexer no Python do Mac
if [ ! -x .venv/bin/python ]; then
  echo "Primeira vez: preparando (leva ~1 minuto)..."
  python3 -m venv .venv || { echo "Não consegui criar o ambiente."; pausa; exit 1; }
fi
if ! .venv/bin/python -c "import PIL, sys; sys.exit(0 if tuple(map(int, PIL.__version__.split('.')[:2])) >= (11, 3) else 1)" 2>/dev/null; then
  .venv/bin/pip install --quiet --upgrade pip pillow || { echo "Falha ao instalar o Pillow (sem internet?)."; pausa; exit 1; }
fi

mkdir -p _originais
.venv/bin/python converter.py "$@"
pausa
