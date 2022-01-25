var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const favicon = require('serve-favicon');
const rDatos = require('./src/app/routes/Datos');
const rEstacion = require('./src/app/routes/Estaciones');
const rSensor = require('./src/app/routes/Sensores');  
const rDatosSMS = require('./src/app/routes/MensajeSMS');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use("/api", rDatos);
app.use("/api", rEstacion);
app.use("/api", rSensor);
//app.use("/api", rDatosSMS);

  app.get('/', async(req, res) => {
   return res.send("este es el servidor de udecSat alertas tempranas");
  })

module.exports = app;
