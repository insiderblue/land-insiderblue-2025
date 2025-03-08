#!/bin/bash

# Verifica se há pacotes desatualizados
if npm outdated | grep -q '.'
then
  echo "Pacotes desatualizados encontrados. Instalando dependências..."
  npm install
else
  echo "Todos os pacotes estão atualizados."
fi

# Faz o git pull com rebase
git pull --rebase

# Executa o build
npm run build

# Reinicia a aplicação usando o pm2
pm2 restart insiderblue || pm2 start npm --name "insiderblue" -- start
