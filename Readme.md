# Banco de dados  e Backend com Docker Node Express Typescript e Prisma

### Me basei nesse video aqui 
https://www.youtube.com/watch?v=gnq8ZY85UUM

# Primeiro comando usado(criar arquivo de dependencias)
npm init -y

## isso aqui cria um arquivo pkg.json 

## criar  container com docker-compose como banco de dados

## sempre mapear o volume da maneira certa colocar esse final aqui sempre:
 :/var/lib/postgresql/data

# instalação do prisma
npm i prisma @prisma/client

## adicionei um um novo arquivo chamado .gitignore para as pastas do  banco e node_modules

## Add arquivo do prisma
 npx prisma init

## criar tabela com a informação dos usuários(ler documentação)

## Configure o env com as mesmas informações do enviorment do docker-compose, user, password e database name

# Rodamos o comando para criar as migrations 
npx prisma migrate dev --name init

# caso de erro 🩻

## vale o destaque, verificar se tem o postgres instalado na maquina ta(apagar ele no caso) ou troque a porta 

# Configurando a API

## criar pasta src e index.ts

## instalei o express, cors e dotenv

## Instalar os types do express
npm i -d @types/express

## Instalar os types do cors
npm i -d @types/cors

## criar o scripts para rodar o projeto 

## instalar o ts-node-dev no lugar do nodemon

## Criar arq prisma .ts, declara constante que recipera o PrismaClient()

## Criei uma nova pasta para controlar o retorno da função do repositório, user.controller.ts

## Criei um novo arquivo chamado routes, para desponibilizar os endpoints

## crei o primeiro metodo, post , testei usando o insomnia 

# para criptrografia das senhas instalar o bcrypt 
npm i bcrypt

# Criei uma nova pasta de fazer para validar os campos do body da api 
npm i yup

## retornando apenas o que desejo

## criei uma função para validar o que estou enviando assim as criticas são tratadas ao serem retornadas 

## Agora que o post já está funcionando, posso costruir os demais end-points 

# Passo a Passo para construir API

## criar 4 pastas: 

## Services: instacia do objeto prisma para demais pastas

## Repositiorys: cria a função deseja do crud

## Controller: Iniciar a função criada passando valores!

## Routes: disponibilizar end-points

### Basicamente: declare uma função asincrona para criar usuarios

### passe o corpo da requisisão para a função cima criada

### use um try e catch para retorno positivo e negativo 

### disponibilize uma rota para usar a função mencionada no caso POST

### Teste essa rota usando Insomnia
