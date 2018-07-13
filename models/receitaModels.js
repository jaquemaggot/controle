var client = require('../config/dbconnection');

module.exports = {
    listarReceitas
}

function listarReceitas(callback){
    client.query('SELECT * FROM  receita', callback);
}