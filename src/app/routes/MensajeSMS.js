const express = require( 'express');
var  rDatosSMS = express.Router();
const CDatos = require("../controller/Mensaje");

setInterval(function() {
    CDatos.SMS1()
},10000);
module.exports= rDatosSMS ;
