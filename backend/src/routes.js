//Para importar um arquivo ou biblioteca cria-se uma constante ja que nao sera alterada e atribui a ela a biblioteca ou arquivo usando a palavra reservada 'require' e passando
//como parametro entre os ('') o nome da biblioteca ou diretorio do arquivo a ser usado

//importando o pacote expresss
const express = require('express');

//Para se criar um arquivo de rotas separados, é necessario usar um metodo do express que permite a visualização de rotas em arquivos separados
//neste exemplo criou-se uma constatne 'routes' e atribuiu-se a ela o express.Router() permitindo assim a visualização de rotas em arquivos separados.
const routes = express.Router();
//Importação do arquivo OngService para ser usado neste arquivo de rotas; por altos, o arquivo contem os metodos que seriam implementados dentro dessas rotas, 
//facilitando assim o entendimento e organizando o codigio
const ongService = require('./controllers/OngService');

//Importação do arquivo IncidentService para ser usado neste arquivo de rotas; por altos, o arquivo contem os metodos que seriam implementados dentro dessas rotas, 
//facilitando assim o entendimento e organizando o codigio
const incidentsService = require('./controllers/IncidentService');

//Importação do arquivo ProfileService para ser usado neste arquivo de rotas; por altos, o arquivo contem os metodos que seriam implementados dentro dessas rotas, 
//facilitando assim o entendimento e organizando o codigio
const profileService = require('./controllers/ProfileService')

//Importação do arquivo SessisonService para ser usado neste arquivo de rotas; por altos, o arquivo contem os metodos que seriam implementados dentro dessas rotas, 
//facilitando assim o entendimento e organizando o codigio
const sessionService = require('./controllers/SessisonService');

//Criação das rotas com seus endpoints e chamadas das constantes com seus respectivos metodos.
routes.post('/session',sessionService.login);
routes.post('/ongs',ongService.crate);
routes.get('/ongs',ongService.index);
routes.post('/incidents', incidentsService.create);
routes.get('/incidents', incidentsService.index);   
routes.get('/profile', profileService.indexAll);
routes.delete('/incidents/:id',incidentsService.delete);

//'module.exportes  = arquivo' é usado para sinalizar  que esse arquivo pode ser exergado e exportado para outro arquivo no projeto.
module.exports = routes;
