var client = require('../config/dbconnection');

module.exports = {
    listarconsulta,
    listarConsultaById
}

function listarconsulta(callback){
    client.query('SELECT * FROM  usuarios', callback);
}
function listarConsultaById(id, callback){
	client.query('SELECT * FROM consulta WHERE consulta_id = ' + id, callback);
}