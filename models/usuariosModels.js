var client = require('../config/dbconnection');

module.exports = {
    listarUsuarios,
    listarUsuarioById,
    inserirUsuario,
    alterarUsuario
}

function listarUsuarios(callback){
    client.query('SELECT * FROM  usuarios', callback);
}

function listarUsuarioById(id, callback){
	client.query('SELECT * FROM usuarios WHERE usuario_id = ' + id, callback);
}

function inserirUsuario(dados, callback) {
	var msql = 'INSERT INTO usuarios SET ? ';
	client.query(msql, dados, callback);
}
function alterarUsuario(dados, callback) {
	var msql = 'CALL alteraUsuario(?)';
	client.query(msql, dados, callback);
}