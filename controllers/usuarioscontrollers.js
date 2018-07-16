var model = require('../models/usuariosModels');

module.exports = {
    listarUsuarios,
    buscarUsuario,
    inserirUsuario
}

function listarUsuarios(req, res) {
    model.listarUsuarios(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ usuarios : result });
    });
}

function buscarUsuario(req, res) {
    id = req.params.id; 
    //console.log(id)
    model.listarUsuarioById(id, function (err, result) {
        if (err) {
            throw err;
        }
        //console.log(result);
        res.json({ usuarios : result});
    })
};

function inserirUsuario(req, res) {
    var dados = req.body;
    model.inserirUsuario(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ usuarios : result })
    })
}
