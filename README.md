# Desafios Docker - FullCycle

Repositório para os dois desafios práticos do módulo de Docker do curso FullCycle 2.0

## GO Challenge

Consiste em criar uma imagem da linguagem Golang com tamanho menor que 2mb, ao executar a mesma retorna "Code.education Rocks!"

Para ver o resultado execute os comandos abaixo em sequência. Lembrando que você precisa ter o Docker instalado na máquina.

Link para imagem no Docker Hub: https://hub.docker.com/r/wwillers/codeeducation

  ``` 
  docker pull wwillers/codeeducation 
  ```
  
  ``` 
  docker run wwillers/codeeducation 
  ```

## Node + Nginx Challenge

A ideia é utilizar o Nginx como um proxy reverso. Quando um usuário acessar o nginx, ele fará uma chamada para a aplicação Node.
A aplicação irá adicionar um registro no banco e irá retornar Full Cycle Rocks! com uma lista de nomes cadastrados.

Para rodar a aplicação entre na pasta node_nginx_challenge e execute:
` docker compose up -d `

Pensando em facilitar o cadastro, o mesmo será feito acessando localhost:8080/:nomedeusuário, por exemplo:
` localhost:8080/william ` irá cadastrar um usuário com nome william.
