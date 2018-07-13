var model = require('../models/receitaModels');

module.exports = {
    listarReceitas
}

function listarReceitas(req, res) {
    model.listarReceitas(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ receitas : result });
    });
}
