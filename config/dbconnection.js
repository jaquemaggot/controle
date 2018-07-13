var mysql = require('mysql');

var connMySQL = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306
});
console.log('Conectado');
connMySQL.query('USE controle')
module.exports = connMySQL;
    
    


