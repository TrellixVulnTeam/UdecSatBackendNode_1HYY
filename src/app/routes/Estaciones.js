const express = require( 'express');
var rEstacion = express.Router();
const CEstacion = require("../controller/Estaciones");
/* GET users listing. */


rEstacion.route("/estacion").get( CEstacion.estacion);
rEstacion.route("/estacionid/:idEstacion").get( CEstacion.estacionid);
rEstacion.route("/estacionNombre/:nombreEstacion").get( CEstacion.estacionNom);

module.exports=rEstacion;
