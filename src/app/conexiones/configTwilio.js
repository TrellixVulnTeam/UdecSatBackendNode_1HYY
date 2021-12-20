var twilio = require('twilio');
var twilioSID = process.env.TWILIO_SID || 'twiliosid';
var twilioToken = process.env.TWILIO_TOKEN || 'twiliotoken';
var cliente = twilio(twilioSID, twilioToken);
var MessagingResponse = require('twilio').twiml.MessagingResponse;
module.exports ={
    cliente,
    MessagingResponse
  }