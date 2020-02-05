const LocalModel = require('../models/local');

const LocalController = {};

LocalController.listar = (req, res, next) => {
  LocalModel.listar( (err, data) => {
    res.json(data);
  });
}
LocalController.crear =(req,res,next)=>{
  const objetoLocal={
    nombreLocal: req.body.nombreLocal,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    idTipoLocal: req.body.idTipoLocal,
    latitud: req.body.latitud,
    longitud: req.body.longitud
  }
  LocalModel.crear(objetoLocal,(err, data) => {
    if(data){
      res.json({sucess: true,
      msg: 'local creado',
      data:data
      });
    }else{
      res.json({sucess: false,
          msg: 'error'});
    }
  });
}
LocalController.actualizar =(req,res,next)=>{
  const objetoLocal={
    idLocal: req.params.id,
    nombreLocal: req.body.nombreLocal,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    idTipoLocal: req.body.idTipoLocal,
    latitud: req.body.latitud,
    longitud: req.body.longitud
  }
  LocalModel.actualizar( objetoLocal,(err, data) => {
    if(data && data.msg){
      res.json(data);
    }else{
      res.json({'sucess': false, 'msg:': 'error'});
  }
  });
}
LocalController.borrar = (req, res) => {
  const idLocal=req.params.id
  LocalModel.borrar( idLocal,(err, data) => {
    if(data){
      res.json({sucess: true,data});
  }else{
      res.json({'msg':'err'});
  }
  });
}

module.exports = LocalController;
