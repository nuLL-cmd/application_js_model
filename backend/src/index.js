//Cria uma constante que recebe o metodo require passando o framework express como parametro
const express = require('express');
const routes = require('./routes');
const cors = require('cors')
//cria uma constante que recebe um expresss
const app = express();
//o metodo  use recebendo o parametro express.json, permite converter para objeto javascript os bodys das requisições que sao recebidas em json
app.use(cors());
app.use(express.json());
app.use(routes);
//importa o arquivo de rotas localizado no mesmo diretorio do index para a constante routes

/*  
Metodos HTTP usados  na requisição
Associa-se com um CRUD
GET - Busca/lista uma informação no backend
POST - Grava uma informação no backend
PUT - Altera uma informação no backend
DELETE - Deleta uma informação no backend
*/

/*
Tipos de parametros
#Query params - Parametros nomeados envaidos na rota apos o simbolo de ? exemplo &name=marco onde marco que é o meu parametro a ser buscado no backend
Servem para filtros, paginação, etc

#Route parans - Parametros utilizados para identificar recursos ou seja, um ponto especifico por exemplo no banco de dados, onde voce passa como parametro 
um id e ele busca esse usuario com base no seu id exemplo localhost:3333/users/1 (o 1 representa o meu rout params)

Request body - Corpo da requis8ição utilizado pra criar ou atualizar recursos
*/


app.listen(3333);
