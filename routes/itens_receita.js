var controller = require('../controllers/itensReceitacontrollers');

module.exports = function(app){
    app.get('/listaritensreceita', controller.listarItensReceita);
    app.post('/inserirItensReceita', controller.inserirItensReceita);
}
