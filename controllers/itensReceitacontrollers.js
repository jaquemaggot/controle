var model = require('../models/itens_receitaModels');

module.exports = {
    listarItensReceita
}

function listarItensReceita(req, res) {
    model.listarItensReceita(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ itensReceita : result });
    });
}

