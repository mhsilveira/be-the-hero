const express  = require("express");
const routes   = require('./routes');
const cors     = require('cors');
const {errors} = require('celebrate');
const app      = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

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
