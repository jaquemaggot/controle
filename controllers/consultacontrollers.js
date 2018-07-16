var model = require('../models/consultaModels');

module.exports = {
    listarconsulta,
    buscarConsulta,
    inserirConsulta
}

function listarconsulta(req, res) {
    model.listarconsulta(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ consulta : result });
    });
}
function buscarConsulta(req, res) {
    id = req.params.id; 
    model.listarConsultaById(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ consulta : result});
    })
};

function inserirConsulta(req, res) {
    var dados = req.body;
    model.inserirConsulta(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ consulta : result })
    })
}