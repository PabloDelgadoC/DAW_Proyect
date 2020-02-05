const UsuarioModel = require('../models/usuarios');

const usuarioController = {

  listar: async (req, res, next) => {
    await UsuarioModel.listar( (err, data) => {
      res.status(200).json(data);
    });
  },

  listarById: async (req, res,) => {
    const { id } = req.params;
    await UsuarioModel.listarById(id, (error, data) => {
      console.log(data);
      res.status(200).send(data);
    });
  },

  crear: async (req, res, next) => {
    const usuario = {
      idUsuario: null,
      usuario: req.body.usuario,
      contraseña: req.body.contraseña,
      idEmpleado: req.body.idEmpleado
    }
    await UsuarioModel.crear(usuario, (error, data) => {
      if(data) {
        console.log(usuario);
        res.status(200).json({
          sucess: true,
          msg: 'Usuario Insertado con Éxito',
          data: data
        });
      }else{
        res.status(404).json({
          sucess: false,
          msg: error
        });
        next();
      }
    });
  },

  actualizar: async (req,res,next) => {
    const usuario = {
      idUsuario: req.params.id,
      usuario: req.body.usuario,
      contraseña: req.body.contraseña,
      idEmpleado: req.body.idEmpleado
    }
    await UsuarioModel.actualizar(usuario, (err, data) => {
      if(data && data.msg){
        res.status(200).json(data);
      }else{
        res.status(404).json({'sucess': false, 'msg:': 'error'});
    }
    });
  },

  borrarById: async (req, res, next) => {
    const { id } = req.params;
    await UsuarioModel.borrarById(id, (error, data) => {
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

};

module.exports = usuarioController;
