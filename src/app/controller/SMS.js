//const very= process.env.Twilio_very;
//var MessagingResponse = require('twilio').twiml.MessagingResponse;
//const admin =require("../conexiones/configFirebase");

/*exports.SMS = async (req, res) => {
    let data = `SELECT count(*) as alerta,ubicacion FROM public.max_min where "valor"<="maxSensor" GROUP BY ubicacion`;
        const query = await pgClient.query(data, function select(error, result, fields) {

        if (error) {
            console.log(error);
            return query;
        }
        const car = result.rows.map((resul) => {
            const text = 'UdecSat alerta de inundacion en '+resul.ubicacion+'  pongase a salvo ';
            if(resul.alerta>=6){               
                database.ref('UsuariosPhone/').once('child_added').then((snapshot) => {
                numbers.push( snapshot.val()); 
                console.log( 'Added number ' + snapshot.val());  
               for( var i = 0; i < numbers.length; i++ ) {
                console.log( 'Added number ' + numbers.length );  
                clientT.messages.create( { to:numbers[i],from:from, body:text}, function( err, responseData ) {
                    if (err) {
                        console.log(err);
                    } else {
                        if(responseData.messages!= "0") {
                            console.log("Message sent successfully.");
                        } else {
                            console.log(`Message failed with error`);
                        }
                    }
                });
            }
        });    
     }
 })    
}); 
console.log("fin.");  
};*/
 /* exports.subcribir  = async (req, res) => {
   var phone = req.body.phone;
   console.log(phone);
   clientT.verify.services(very).verifications.create({to: phone, channel: 'sms'}).then(verification => console.log(verification.status))

}
exports.verificar  = async (req, res) => {
    var phone = req.body.phone;   
    var codes = req.body.codes;
    console.log(codes);
   clientT.verify.services(very)
      .verificationChecks
      .create({to:phone, code:codes})
      .then(verification_check =>
         console.log("si llego ",verification_check.status));
}

exports.subcribir  = async (req, res) => {
 var resp = new MessagingResponse();
  if( req.body.Body === 'subscribe' ) {
    var fromNum = req.body.From;
    if(numbers.indexOf(fromNum) !== -1) {
      resp.message('You already subscribed!');
    } else {
      resp.message('Gracias, ahora estás suscrito. Responda "DETENER" para dejar de recibir actualizaciones.');
      database.ref('UsuariosPhone/').push(fromNum);
     // clientT.verify.services(very).verifications.create({to:  fromNum, channel: 'sms'}).then(verification => console.log(verification.status));
    }
  } else {
    resp.message('Bienvenido a las actualizaciones diarias. Texto "Suscribirse" recibir actualizaciones.');
  }
  res.writeHead(200, {
    'Content-Type':'text/xml'
  });
  res.end(resp.toString());
}
exports.SMS = async (req, res) => {
        let data = `SELECT count(*) as alerta,ubicacion FROM public.max_min where "valor"<="maxSensor" GROUP BY ubicacion`;
            const query = await pgClient.query(data, function select(error, result, fields) {
    
            if (error) {
                console.log(error);
    
                return query;
            }
            const car = result.rows.map((resul) => {
                if(resul.alerta>=6){
                    const from = "UdecSat"
                    const text = 'alerta de inundacion en '+resul.ubicacion+'  pongase a salvo '
                   database.ref('UsuariosPhone').once('child_added').then((snapshot) => {
                   data = snapshot.val();
                   console.log('user: ' + data.phone);
                   vonage.message.sendSms(from,data, text, (err, responseData) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if(responseData.messages[0]['status'] === "0") {
                            console.log("Message sent successfully.");
                        } else {
                            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                        }
                    }
                   })
                 });      
            })    
        }); 
        console.log("fin.");  
};
                }*/
