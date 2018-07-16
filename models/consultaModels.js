var client = require('../config/dbconnection');

module.exports = {
    listarconsulta,
    listarConsultaById,
    inserirConsulta
}

function listarconsulta(callback){
    client.query('SELECT * FROM  usuarios', callback);
}
function listarConsultaById(id, callback){
	client.query('SELECT * FROM consulta WHERE consulta_id = ' + id, callback);
}
function inserirConsulta(dados, callback) {
	var msql = 'INSERT INTO consulta SET ? ';
	client.query(msql, dados, callback);
}