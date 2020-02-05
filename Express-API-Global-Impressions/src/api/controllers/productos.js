const ProductoModel = require('../models/productos');

const productController = {};

productController.listar = (req, res, next) => {
  ProductoModel.listar( (err, data) => {
    res.status(200).send(data);
  });
}

productController.listarById = (req, res, next) => {
  const id = req.params.id;
  ProductoModel.listarById(id, (error, data) => {
    console.log(data);
    res.status(200).send(data);
  });
}

productController.crear = (req, res, next) => {
  const producto = {
    idProducto: null,
    imagePath: req.body.imagePath,
    precio: req.body.precio,
    detalle: req.body.detalle,
    idAutor: req.body.idAutor,
    descripcion: req.body.descripcion,
    idTipoProducto: req.body.idTipoProducto,
    likes: req.body.likes
  }
  ProductoModel.crear(producto, (error, data) => {
    if(data) {
      console.log(producto);
      res.status(200).json({
        sucess: true,
        msg: 'Producto Insertado con Éxito',
        data: data
      });
    }else{
      res.status(404).json({
        sucess: false,
        msg: error
      });
    }
  });
}

productController.actualizar = (req, res, next) => {
  const nuevoProducto = {
    idProducto: req.body.id,
    imagePath: req.body.imagePath,
    precio: req.body.precio,
    detalle: req.body.detalle,
    idAutor: req.body.idAutor,
    descripcion: req.body.descripcion,
    idTipoProducto: req.body.idTipoProducto,
    likes: req.body.likes
  }
  ProductoModel.actualizar(nuevoProducto, (error, data) => {
    if(data){
      res.status(200).json({
        sucess: true,
        msg: 'Producto Actualizado con Éxito',
        data: data
      });
    }else{
      res.status(404).json({
        sucess: false,
        msg: error
      });
    }
  });
}

productController.borrarById = (req, res, next) => {
  const id = req.params.id;
  ProductoModel.borrarById(id, (error, data) => {
    if(data) {
      res.status(200).json({
        sucess: true,
        msg: 'Producto Eliminado con Éxito',
        data: data
      });
    }else{
      res.status(404).json({
        sucess: false,
        msg: error
      });
    }
  });
}

module.exports = productController;
