var client = require('../config/dbconnection');

module.exports = {
    listarReceitas,
    listarReceitaById
}

function listarReceitas(callback){
    client.query('SELECT * FROM  receita', callback);
}
function listarReceitaById(id, callback){
	client.query('SELECT * FROM receita WHERE receita_id = ' + id, callback);
}