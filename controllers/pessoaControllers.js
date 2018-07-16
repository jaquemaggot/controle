var model = require('../models/pessoaModels');

module.exports = {
    listarPessoas,
    buscarPessoa,
    inserirPessoa
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

function inserirPessoa(req, res) {
    var dados = req.body;
    model.inserirPessoa(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ pessoas : result })
    })
}