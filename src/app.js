/* Importação de módulos */
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const dotevn = require("dotenv");
const cookieParser = require("cookie-parser");


/* Conexão com o banco de dados */
const databaseConnection = require('./config/connectionFactory');

/* Importação das rotas */
const routes = require('./routes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

/* Atribuição do Express a uma variável */
const app = express();

/* Definição da pasta de views e da template engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Uso dos módulos importados e middlewares */
dotevn.config();
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(routes);
app.use('/usuario', userRoutes);
app.use('/produto', productRoutes)

/* Configurações de servidor */
const port = 3333;
app.listen(port, () => console.log(`\n*** Servidor rodando na porta ${port}! ***`));