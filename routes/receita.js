var controller = require('../controllers/receitacontrollers');

module.exports = function(app){
    app.get('/listarReceitas', controller.listarReceitas);
}
