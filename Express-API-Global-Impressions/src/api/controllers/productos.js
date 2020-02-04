const ProductoModel = require('../models/productos');

const productController = {};

productController.listar = (req, res, next) => {
  ProductoModel.listar( (err, data) => {
    res.json(data);
  });
}

module.exports = productController;
