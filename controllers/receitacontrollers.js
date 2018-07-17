var model = require('../models/receitaModels');

module.exports = {
    listarReceitas,
    buscarReceita,
    inserirReceita,
    alterarReceita
}

function listarReceitas(req, res) {
    model.listarReceitas(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ receitas : result });
    });
}

function buscarReceita(req, res) {
    id = req.params.id; 
    //console.log(id)
    model.listarReceitaById(id, function (err, result) {
        if (err) {
            throw err;
        }
        //console.log(result);
        res.json({ receitas : result});
    })
};

function inserirReceita(req, res) {
    var dados = req.body;
    model.inserirReceita(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ receitas : result })
    })
}

function alterarReceita(req,res){
    console.log(req.body)
    id = req.params.codigo;
    console.log(id)
    model.alterarReceita(id,req.body,function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ receitas : result });
    })
}