var model = require('../models/itens_receitaModels');

module.exports = {
    listarItensReceita,
    inserirItensReceita
}

function listarItensReceita(req, res) {
    model.listarItensReceita(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ itensReceita : result });
    });
}

function inserirItensReceita(req, res) {
    var dados = req.body;
    model.inserirItensReceita(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ itensReceita : result })
    })
}
