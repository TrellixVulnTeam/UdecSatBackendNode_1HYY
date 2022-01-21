const Vonage = require('@vonage/server-sdk')
const accountSid= process.env.Twilio_accountSid;
const authToken= process.env.Twilio_authToken;
var twilio = require('twilio');
var clientT = new twilio (accountSid, authToken); 

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
})

  

  module.exports={
    vonage,
    clientT
  };