var client = require('../config/dbconnection');

module.exports = {
    listarReceitas,
    listarReceitaById,
    inserirReceita,
    alterarReceita
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

function alterarReceita(id,dados,callback){
    console.log(dados)
    client.query(`UPDATE receita SET receita_consulta = ${dados.receita_consulta}, receita_obs = ${dados.receita_obs}, receita_data = ${dados.receita_data}, receita_inativo = ${dados.receita_inativo},receita_paciente = ${dados.receita_paciente},receita_atendente = ${dados.receita_atendente}  WHERE receita_id = ${id}`,callback)
}