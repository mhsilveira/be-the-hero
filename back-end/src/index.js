const express = require("express");
const routes = require('./routes');
const cors = require('cors');
const app = express();


/*
Avisando ao express que o corpo da requisição está em formato JSON
*/ 
app.use(cors());
app.use(express.json());
app.use(routes);


/*
* Métodos HTTP
* GET:    Busca info do back
* POST:   Criar uma info do back
* PUT:    Alterar uma info do back
* DELETE: Deletar uma info do back
*/


/*
* Tipos de parâmetros
* Query Params: parametros após o ?
* Route Params: parametros utilizados para identificar recursos com o :
* Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * Entidade --> Algo que vai ser salvo no banco de dados! (ONG, Caso, )
 * KNEX JS (query builder de Node)
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
app.listen(3333);