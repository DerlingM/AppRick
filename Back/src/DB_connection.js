require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const Character = require('./models/Character.js')
const Favorite = require('./models/Favorite.js')

const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
Character(sequelize);
Favorite(sequelize);
module.exports = {
   ...sequelize.models,
   sequelize,
};
