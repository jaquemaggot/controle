var client = require('../config/dbconnection');

module.exports = {
    listarconsulta
}

function listarconsulta(callback){
    client.query('SELECT * FROM  usuarios', callback);
}