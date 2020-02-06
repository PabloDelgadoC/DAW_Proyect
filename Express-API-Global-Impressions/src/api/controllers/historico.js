const HistoricoModel = require('../models/historico');

const historicoController = {

  listar: async (req, res, next) => {
    try {
      const listado = await HistoricoModel.listar();
      console.log('Entrá');
      res.status(200).json(listado);
    } catch (e) {
      res.send(e);
      next(e);
    }
  },

  crear: (req, res, next) => {

  },

  listarById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const lista = await HistoricoModel.listarById(id);
      res.json(lista);
    } catch (e) {
      res.send(e);
      next(e);
    }
  },

  actualizar: (req, res, next) => {

  },

  borrarById: (req, res, next) => {

  }
};

module.exports = historicoController
