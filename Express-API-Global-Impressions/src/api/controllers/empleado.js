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
  const cedulaEmpleado=req.params.id
  EmpleadoModel.listarById( cedulaEmpleado,(err, data) => {
    res.json(data);
  });
}
empleadoController.actualizar =(req,res,next)=>{
  const objetoEmpleado={
    cedula: req.params.id,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono,
    idLocal: req.body.idLocal,
    rol: req.body.rol
  }
  EmpleadoModel.actualizar( objetoEmpleado,(err, data) => {
    if(data && data.msg){
      res.json(data);
    }else{
      res.json({'sucess': false, 'msg:': 'error'});
  }
  });
}
empleadoController.borrar = (req, res) => {
  const cedulaEmpleado=req.params.id
  EmpleadoModel.borrar( cedulaEmpleado,(err, data) => {
    if(data){
      res.json({sucess: true,data});
  }else{
      res.json({'msg':'err'});
  }
  });
}

module.exports = empleadoController;
