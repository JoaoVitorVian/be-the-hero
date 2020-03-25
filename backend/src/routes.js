const express  = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id',IncidentController.delete);
module.exports = routes;

// rota / recurso(users)
// Metodos HTTP:
// GET:Buscar/listar Informação do back-end
// POST:Criar uma informação no back-end
// PUT:Alterar uma informação no back-end
// DELETE:Deletar uma informação no back-end

// Tipos de parâmetros:
// 
// Query Params:Parâmetros nomeados enviados na rota, após o simbolo de interrogação(?) (e servem para filtros,paginação)
// Route Params:Parâmetros para identificar recursos.
// Request Body:Corpo da requisição,utilizado para criar ou alterar recursos.

 
// routes.post('/ongs', async (request, response) => {
//   // request guarda todos os dados que vem da nossa requisição.
//   // response retorna uma resposta ao usuario
//   //  const params = request.query;
//   // const params = request.params; Parâmetro route acessamos pelo metodo params.
//   // const{name,email,whatsapp,city,uf} = request.body;
 
//   // const id = crypto.randomBytes(4).toString('HEX');

//   // await connection('ongs').insert({
//   //   id,
//   //   name,
//   //   email,
//   //   whatsapp,
//   //   city,
//   //   uf,
//   // })

//   // return response.json({ id });//Retornando uma resposta ao cliente.Em formato de Json.
// });//Criando a rota