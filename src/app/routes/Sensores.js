const express = require( 'express');
var rSensor= express.Router();
const CSensor= require( "../controller/Sensores");

/* GET home page. */

rSensor.route("/sensor").get( CSensor.sensores);
rSensor.route("/sensorid/:idSensor").get( CSensor.sensoresid);

module.exports=rSensor;
