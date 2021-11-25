const express = require( 'express');
var rDatos = express.Router();
const CDatos = require("../controller/Datos");
/*  users listing. */


rDatos.route("/datosid/:fk_sensor").get( CDatos.datosfk); 
rDatos.route("/datosS/:fk_sensor").get( CDatos.datosfks); 
rDatos.route("/datos").get( CDatos.datos); 
rDatos.route("/ultimo/:fk_idSensor").get( CDatos.datose); 
rDatos.route("/ultimos/:fk_idSensor").get( CDatos.Ultimos); 
rDatos.route("/reporte").get( CDatos.datosPersonalzados); 
rDatos.route("/buscarFecha/:fecha").get( CDatos.datosFecha); 
rDatos.route("/buscarHora/:hora").get( CDatos.datosHora);
rDatos.route("/fechaHora/:fecha/:hora").get( CDatos.datosFechaHora);

module.exports=rDatos ;
