const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json()); //Serve para informar para o express que estaremos utilizando JSON para o corpo das requisições. 
app.use(routes);


// SQL:MySQL,SQLite,PostegreSQL,Oracle,Microsoft SQL Server
// NOSQL:MongoDB,CouchDB,etc.
//para se relacionar com o banco de dados.
//Driver: SELECT *(*SIGNIFICA TUDO) FROM USERS
//QueryBuilder:table('users').select('*').where()


app.listen(3333);//mandando aplicação ouvir a porta 3333,quando acessar localhost:3333 vai acessar a aplicação.porém não criamos uma rota então não tem nenhuma funcionalidade ainda.
