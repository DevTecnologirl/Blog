# Usando uma imagem oficial do Node.js como base
FROM node:18-alpine

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar arquivos do projeto
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY ./ ./

# Expor a porta do frontend
EXPOSE 3000

# Iniciar o Nuxt.js
CMD ["npm", "run", "dev"]
