var model = require('../models/consultaModels');

module.exports = {
    listarconsulta
}

function listarconsulta(req, res) {
    model.listarconsulta(function (err, result) {
        if (err) {
            throw err;
        }
        res.json({ consulta : result });
    });
}
