var client = require('../config/dbconnection');

module.exports = {
    listarPessoas
}

function listarPessoas(callback){
    client.query('SELECT * FROM  pessoa', callback);
}