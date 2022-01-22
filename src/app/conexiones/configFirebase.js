const { initializeApp } = require("firebase/app");

const admin = initializeApp({
  apiKey : "AIzaSyCFz6Rcv9A0LNwUQYEQgfkuZNoGPO396YQ" , 
    authDomain : "udecsat-2996a.firebaseapp.com" , 
    databaseURL : "https://udecsat-2996a-default-rtdb.firebaseio.com" , 
    projectId : "udecsat-2996a" , 
    storageBucket : "udecsat-2996a.appspot.com" , 
    messagingSenderId : "719296843711" , 
    appId : "1: 719296843711: web: b6a51e9a5e099add7cdb0a" , 
    measurementId : "G-DDGS71BCDL"
  }
    );

module.exports = admin;