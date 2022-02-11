const express = require( 'express');
var  rDatosSMS = express.Router();
const CDatos = require("../controller/Mensaje");

rDatosSMS.route("/sms").post( CDatos.verificar); 
setInterval(function() {
    CDatos.SMS1()
},30000);
module.exports= rDatosSMS ;
