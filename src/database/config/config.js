require('dotenv').config();

module.exports = {
  "development": {
    "username": "weasleys",
    "password": "wizard1234*",
    "database": "weasleys_db",
    "host": "mysql-weasleys.alwaysdata.net",
    "dialect": "mysql",
    "port":"3306"
  },
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