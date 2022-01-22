const express = require( 'express');
var  rDatosSMS = express.Router();
const CDatos = require("../controller/SMS");
/*  users listing. */


//rDatosSMS.route("/sms").get( CDatos.SMS); 
//rDatosSMS.route("/message").post( CDatos.subcribir); 
//rDatosSMS.route("/verificar").post( CDatos.verificar); 
setInterval(function() {
    CDatos.SMS1()
},10000);
module.exports= rDatosSMS ;
