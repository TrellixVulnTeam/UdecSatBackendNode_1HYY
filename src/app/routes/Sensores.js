const express = require( 'express');
var rSensor= express.Router();
const CSensor= require( "../controller/Sensores");

/* GET home page. */

rSensor.route("/sensor").get( CSensor.sensores);
rSensor.route("/sensorid/:idSensor").get( CSensor.sensoresid);
rSensor.route("/sensorciudad/:id_ciudad").get( CSensor.sensoresciudad);

module.exports=rSensor;
