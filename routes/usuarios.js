var controller = require('../controllers/usuariosControllers');

module.exports = function(app){
    console.log("Cheguei nas Rotas")
    app.get('/listarusuarios', controller.listarUsuarios);
    app.get('/buscarUsuario/:id',controller.buscarUsuario);
    app.post('/inserirUsuario', controller.inserirUsuario);
    app.post('/alterarUsuario/:id',controller.alterarUsuario);

}
