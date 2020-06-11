const Sequelize = require("sequelize");

//Nessa linha, é necessário informar a tabelaBD (showDatabases;) + usuárioBD + senhaBD 
const sequelize = new Sequelize('show databases;', 'usuarioDB', 'SenhaDB',{
    host: 'localhost', 
    dialect: 'mysql' //MYSQL
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}