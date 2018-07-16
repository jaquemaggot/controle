var client = require('../config/dbconnection');

module.exports = {
    listarPessoas,
    listarPessoaById,
    inserirPessoa
}

function listarPessoas(callback){
    client.query('SELECT * FROM  pessoa', callback);
}
function listarPessoaById(id, callback){
	client.query('SELECT * FROM pessoa WHERE pessoa_id = ' + id, callback);
}
function inserirPessoa(dados, callback) {
	var msql = 'INSERT INTO pessoa SET ? ';
	client.query(msql, dados, callback);
}