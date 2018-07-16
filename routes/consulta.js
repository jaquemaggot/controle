var controller = require('../controllers/consultaControllers');

module.exports = function(app){
    app.get('/listarConsultas', controller.listarconsulta);
    app.get('/buscarConsulta/:id',controller.buscarConsulta);
    app.post('/inserirConsulta', controller.inserirConsulta);
}
