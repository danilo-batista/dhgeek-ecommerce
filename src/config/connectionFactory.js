/* Importa dos dados de configuração do banco de dados */
const dbConfig = require('../config/database');

/* Importa e faz a desestruturação do módulo do Sequelize */
const { Sequelize } = require('sequelize');

/* Instancia uma nova conexão com os dados configurados */
const connection = new Sequelize(dbConfig);

/* Testa se a conexão foi bem sucedida */
connection.authenticate()
    .then(() => {
        console.log(`* Conexão com o banco de dados '${dbConfig.database}' foi estabelecida com sucesso! *\n`)
    })
    .catch((error) => {
        // console.error('Unable to connect to the database:', error);
        console.log(`* Não foi possível conectar com o banco de dados '${dbConfig.database}'. Verifique a sua disponibilidade. *\n`);
    });

/* Disponibilizar a configuração para uso externo. */
module.exports = connection;