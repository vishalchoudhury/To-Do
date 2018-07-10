
/**
 * Module dependencies.
 */

const express = require('express')

const  todoController = require('./controllers/todocontroller');

const app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(80,'127.0.0.1');

console.log("listening to port 80");
