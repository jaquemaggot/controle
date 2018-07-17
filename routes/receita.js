var controller = require('../controllers/receitacontrollers');

module.exports = function(app){
    app.get('/listarReceitas', controller.listarReceitas);
    app.get('/buscarReceita/:id',controller.buscarReceita);
    app.post('/inserirReceita', controller.inserirReceita);
    app.post('/alterarReceita/:codigo',controller.alterarReceita);
}
