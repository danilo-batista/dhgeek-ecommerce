/* Cria a configuração básica de acesso ao banco */
const development = {
  "username": 'root',
  "password": '',
  "database": 'dhgeek',
  "host": 'localhost',
  "dialect": 'mysql',
};

/* Disponibilizar a configuração para uso externo. */
module.exports = development;

/** Deixando aqui apenas para referência futura.
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
 */
