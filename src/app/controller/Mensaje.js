const { pool } = require('../conexiones/configDB');
const pusher = require('../conexiones/configPusher');
const admin =require("../conexiones/configFirebase");
const accountSid= process.env.Twilio_accountSid;
const authToken= process.env.Twilio_authToken;
var twilio = require('twilio');
var clientT = new twilio (accountSid, authToken); 
var map = Array.prototype.map;
const from = "+19147580437";
var numbers = [];
let pgClient;
var database = admin.database(); 

pool.connect((err, client) => {
    if (err) {
        console.log(err);
    }

    console.log("conexion ala base datos");
    pgClient = client;
    client.on('notification', function (msg) {
        pusher.trigger('watch_dato_sensor', 'new_record', JSON.parse(msg.payload));
    });
    const query = client.query('LISTEN watch_dato_sensor');
});



exports.SMS1 = async (req, res) => {
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
};
