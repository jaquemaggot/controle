var model = require('../models/pessoaModels');

module.exports = {
    listarPessoas,
    buscarPessoa
}

function listarPessoas(req, res) {
    model.listarPessoas(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ pessoas : result });
    });
}

function buscarPessoa(req, res) {
    id = req.params.id; 
    model.listarPessoaById(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ pessoas : result});
    })
};