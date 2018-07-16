var model = require('../models/receitaModels');

module.exports = {
    listarReceitas,
    buscarReceita
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
