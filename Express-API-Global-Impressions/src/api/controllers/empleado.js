const EmpleadoModel = require('../models/empleado');

const empleadoController = {};

empleadoController.listar = (req, res, next) => {
  EmpleadoModel.listar( (err, data) => {
    res.json(data);
  });
}
empleadoController.crear =(req,res,next)=>{
  const objetoEmpleado={
    cedula: req.body.cedula,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono,
    idLocal: req.body.idLocal,
    rol: req.body.rol
  }
  EmpleadoModel.crear(objetoEmpleado,(err, data) => {
    if(data){
      res.json({sucess: true,
      msg: 'empleado creado',
      data:data
      });
    }else{
      res.json({sucess: false,
          msg: 'error'});
    }
  });
}
empleadoController.listarById =(req,res,next)=>{
  EmpleadoModel.listarById( (err, data) => {
    res.json(data);
  });
}
empleadoController.actualizar =(req,res,next)=>{
  EmpleadoModel.actualizar( (err, data) => {
    res.json(data);
  });
}
empleadoController.borrar = (req, res, next) => {
  EmpleadoModel.borrar( (err, data) => {
    res.json(data);
  });
}

module.exports = empleadoController;
