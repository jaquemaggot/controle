var controller = require('../controllers/usuariosControllers');

module.exports = function(app){
    app.get('/listarusuarios', controller.listarUsuarios);
}
