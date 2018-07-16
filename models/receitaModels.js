var client = require('../config/dbconnection');

module.exports = {
    listarReceitas,
    listarReceitaById,
    inserirReceita
}

function listarReceitas(callback){
    client.query('SELECT * FROM  receita', callback);
}
function listarReceitaById(id, callback){
	client.query('SELECT * FROM receita WHERE receita_id = ' + id, callback);
}
function inserirReceita(dados, callback) {
	var msql = 'INSERT INTO receita SET ? ';
	client.query(msql, dados, callback);
}