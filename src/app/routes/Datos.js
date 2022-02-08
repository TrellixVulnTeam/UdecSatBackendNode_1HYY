const express = require( 'express');
var rDatos = express.Router();
const CDatos = require("../controller/Datos");


rDatos.route("/datosid/:fk_sensor").get( CDatos.datosfk); 
rDatos.route("/datosS/:fk_sensor").get( CDatos.datosfks); 
rDatos.route("/datos").get( CDatos.datos); 
rDatos.route("/ultimo/:fk_idSensor").get( CDatos.datosultimo); 
rDatos.route("/ultimos/:id").get( CDatos.Ultimos); 
rDatos.route("/reporte/:id_ciudad").get( CDatos.datosPersonalzados); 
rDatos.route("/buscarFecha/:fecha").get( CDatos.datosFecha); 
rDatos.route("/buscarHora/:hora").get( CDatos.datosHora);
rDatos.route("/fechaHora/:fecha/:hora").get( CDatos.datosFechaHora);
rDatos.route("/maximo").get( CDatos.maximo); 
rDatos.route("/minimo").get( CDatos.minimo); 
rDatos.route("/promedio/:id").get( CDatos.promedio); 
module.exports=rDatos ;
