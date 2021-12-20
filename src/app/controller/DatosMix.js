cronJob = require('cron').CronJob;
const { pool } = require('../conexiones/configDB')
const pusher = require('../conexiones/configPusher')
//const cliente =require('../conexiones/configTwilio')
//const myRootRef =require('../conexiones/configFirebase')
let pgClient;
let totalsi = 0;

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

