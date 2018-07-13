var controller = require('../controllers/pessoaControllers');

module.exports = function(app){
    app.get('/listarPessoas', controller.listarPessoas);
}
