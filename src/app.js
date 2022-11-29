/* Importação de módulos */
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

/* Importação das rotas */
const routes = require('./routes');

/* Atribuição do Express a uma variável */
const app = express();

/* Definição da pasta de views e da template engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Uso dos módulos importados e middlewares */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(routes);

/* Configurações de servidor */
const port = 3333;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));