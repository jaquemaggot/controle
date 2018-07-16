var client = require('../config/dbconnection');

module.exports = {
    listarItensReceita,
    listarItensReceitaById
}

function listarItensReceita(callback){
    client.query('SELECT * FROM  itens_receita', callback);
}
function listarItensReceitaById(id, callback){
	client.query('SELECT * FROM itens_receita WHERE itens_receita = ' + id, callback);
}