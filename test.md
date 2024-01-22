# Comando para criar imagem e container
docker run -p 5432:5432 -e POSTGRES_PASSWORD=root -v C:/Users/Marco/Documents/Sistema-Controle-Gerenciamento-Clientes/postegres:/var/lib/postgresql/data postgres

# Comando para ver container rodando 
docker ps

# Comando para ver se container ainda existe 
docker ps -a

# Comando de parar container 
docker stop -t 0 [inicio da hash]

# Comando de parar container 
docker container prune

# Comando para apagar container e imagem
docker container prune



#

# Comando para apagar container e imagem
docker container prune

# Comandos para rodar o docker-compose
Comandos rodar script do compose
docker-compose up -d

# Comandos rodar apagar container criado
docker-compose down