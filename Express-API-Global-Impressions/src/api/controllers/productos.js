const ProductoModel = require('../models/productos');

const productController = {};

productController.listar = async (req, res, next) => {
  await ProductoModel.listar( (err, data) => {
    res.status(200).send(data);
  });
}

productController.listarById = async (req, res, next) => {
  const { id } = req.params;
  await ProductoModel.listarById(id, (error, data) => {
    console.log(data);
    res.status(200).send(data);
  });
}

productController.crear = async (req, res, next) => {
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
  await ProductoModel.crear(producto, (error, data) => {
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

productController.actualizar = async (req, res, next) => {
  const nuevoProducto = {
    idProducto: req.params.id,
    imagePath: req.body.imagePath,
    precio: req.body.precio,
    detalle: req.body.detalle,
    idAutor: req.body.idAutor,
    descripcion: req.body.descripcion,
    idTipoProducto: req.body.idTipoProducto,
    likes: req.body.likes
  }
  await ProductoModel.actualizar(nuevoProducto, (error, data) => {
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

productController.borrarById = async (req, res, next) => {
  const id = req.params.id;
  await ProductoModel.borrarById(id, (error, data) => {
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
