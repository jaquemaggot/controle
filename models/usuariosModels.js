var client = require('../config/dbconnection');

module.exports = {
    listarUsuarios
}

function listarUsuarios(callback){
    client.query('SELECT * FROM  usuarios', callback);
}