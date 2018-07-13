var client = require('../config/dbconnection');

module.exports = {
    listarItensReceita
}

function listarItensReceita(callback){
    client.query('SELECT * FROM  itens_receita', callback);
}