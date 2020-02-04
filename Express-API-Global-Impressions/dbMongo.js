const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/globalImpressions';

mongoose.Promise = global.Promise;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then( db => {
    console.log('CONEXION A MONGODB CON EXITO');
  })
  .catch( err => console.error(err));

module.exports = mongoose;
