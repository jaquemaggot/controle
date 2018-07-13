var model = require('../models/usuariosModels');

module.exports = {
    listarUsuarios
}

function listarUsuarios(req, res) {
    model.listarUsuarios(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ usuarios : result });
    });
}
