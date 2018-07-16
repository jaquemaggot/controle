var client = require('../config/dbconnection');

module.exports = {
    listarItensReceita,
    listarItensReceitaById,
    inserirItensReceita
}

function listarItensReceita(callback){
    client.query('SELECT * FROM  itens_receita', callback);
}
function listarItensReceitaById(id, callback){
	client.query('SELECT * FROM itens_receita WHERE itens_receita = ' + id, callback);
}
function inserirItensReceita(dados, callback) {
	var msql = 'INSERT INTO itens_receita SET ? ';
	client.query(msql, dados, callback);
}