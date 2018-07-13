var model = require('../models/pessoaModels');

module.exports = {
    listarPessoas
}

function listarPessoas(req, res) {
    model.listarPessoas(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ pessoas : result });
    });
}
