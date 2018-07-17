var client = require('../config/dbconnection');

module.exports = {
    listarUsuarios,
    listarUsuarioById,
    inserirUsuario,
    deletarUsuario,
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

function deletarUsuario(id, callback) {
    client.query('DELETE FROM usuarios WHERE usuario_id = ' + id, callback);
}


function alterarUsuario(id,dados,callback){
    //client.query("UPDATE usuarios SET usuario_nome = '" + dados.usuario_nome + "', usuario_email = '"   + dados.usuario_email +  "', usuario_senha = '" + dados.usuario_senha + "', usuraio_inativo = '" + dados.usuraio_inativo +  "' WHERE usuario_id=  " + id, callback)
    client.query(`UPDATE usuarios SET usuario_nome = ${dados.usuario_nome}, usuario_email = ${dados.usuario_email}, usuario_senha = ${dados.usuario_senha}, usuraio_inativo = ${dados.usuraio_inativo} WHERE usuario_id = ${id}`,callback)
}

/*
function alterarUsuario(dados, callback) {
    var msql = 'CALL alteraUsuario(?)';
	client.query(msql,dados, callback);
}
*/