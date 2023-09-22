# node-Crud

comando para criar o package: 
npm init -y 

criar arquivo server ajustar o main de index para server = "main": "server.js" no package

comando: 
npm i nodemon

Inserir no package o   
````json
"start": "nodemon server.js"
```

Fastify - criar rotas 
comando: npm i fastify

Inserir no package o em baixo da main o  "type":"module",

criar o .gitgnore e adicionar a pasta *node_modules* para não ser enviada ao repositorio

no arquivo server, importar o fastfify e criar um servidor

