const express = require( 'express');
var  rDatosSMS1 = express.Router();
const CDatos = require("../controller/SMS");
/*  users listing. */


//rDatosSMS.route("/sms").get( CDatos.SMS); 
//rDatosSMS.route("/message").post( CDatos.subcribir); 
//rDatosSMS.route("/verificar").post( CDatos.verificar); 

module.exports= rDatosSMS1 ;
