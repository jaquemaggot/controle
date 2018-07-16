var client = require('../config/dbconnection');

module.exports = {
    listarPessoas,
    listarPessoaById
}

function listarPessoas(callback){
    client.query('SELECT * FROM  pessoa', callback);
}
function listarPessoaById(id, callback){
	client.query('SELECT * FROM pessoa WHERE pessoa_id = ' + id, callback);
}