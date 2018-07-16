var controller = require('../controllers/pessoaControllers');

module.exports = function(app){
    app.get('/listarPessoas', controller.listarPessoas);
    app.get('/buscarPessoa/:id',controller.buscarPessoa);
    app.post('/inserirPessoa', controller.inserirPessoa);
}
