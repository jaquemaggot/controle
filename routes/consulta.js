var controller = require('../controllers/consultaControllers');

module.exports = function(app){
    app.get('/listarConsultas', controller.listarconsulta);
}
