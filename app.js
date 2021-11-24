var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const favicon = require('serve-favicon');
const rDatos = require('./src/app/routes/Datos');
const rEstacion = require('./src/app/routes/Estaciones');
const rSensor = require('./src/app/routes/Sensores');  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/api", rDatos);
app.use("/api", rEstacion);
app.use("/api", rSensor);

  app.get('/', async(req, res) => {
   return res.send("este es el servidor de udecSat alertas tempranas");
  })

module.exports = app;
