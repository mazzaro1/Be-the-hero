const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/*
*Métodos HTPP:
*
*GET: Buscar uma informação do back-end
*POST: Criar uma informação no back-end
*Put: Modificar uma informação no back-end
*DELETE: deletetar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query params: parametros nomeados enviados na rota apos "?"(filtros, paginação).
 * Route Params: parametros utilizados para identificar recursos
 * Request body : Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL server;
  * NoSQL: MongoDB, CouchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

