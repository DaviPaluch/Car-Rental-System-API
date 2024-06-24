# Usando a imagem node como base
FROM node

# Instalar dockerize
RUN apt-get update && apt-get install -y wget
RUN wget -qO- https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar -C /usr/local/bin -xzv

# Defina o diretório de trabalho
WORKDIR /usr/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o contêiner
COPY . .

# Copie o arquivo .env para o contêiner
COPY .env .env

# Exponha a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["dockerize", "-wait", "tcp://database:5432", "-timeout", "60s", "sh", "-c", "npx prisma generate && npx prisma migrate deploy && npm run dev"]