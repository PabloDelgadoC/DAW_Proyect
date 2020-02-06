const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var cors = require('cors')





const { mongoose } = require('./dbMongo');
const { mysql } = require('./dbMysql');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const historicoRouter = require('./src/api/routes/historico');
const productoRouter = require('./src/api/routes/productos');
const empleadoRouter = require('./src/api/routes/empleado');
const localRouter = require('./src/api/routes/local');
const sendRouter = require('./src/api/routes/send');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false})); //true en caso de imágenes
app.use(cors())



// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/historico', historicoRouter);
app.use('/empleado', empleadoRouter);
app.use('/productos', productoRouter);
app.use('/local', localRouter);
app.use('/send', sendRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
