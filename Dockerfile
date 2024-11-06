
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Definir um argumento de build para receber o nome da branch
ARG mode

# Definir uma variável de ambiente no contêiner com o valor da branch
ENV mode=${mode}


# Usar o git para pegar a branch atual, se o ARG BRANCH_NAME não for passado
RUN echo "A branch atual é: ${mode}"

RUN npm run build

FROM node:18-slim AS production

WORKDIR /app

COPY --from=build /app/dist /app/dist

COPY package*.json ./

RUN npm install --production

EXPOSE 3000

CMD ["node", "dist/main"]





# FROM node:18-alpine AS build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --frozen-lockfile

# COPY . .

# RUN npm run build

# FROM node:18-alpine

# WORKDIR /usr/src/app

# COPY --from=build /usr/src/app/dist ./dist

# COPY --from=build /usr/src/app/node_modules ./node_modules

# EXPOSE 3000

# CMD ["node", "dist/main"]
