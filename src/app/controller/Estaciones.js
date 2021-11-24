const  { pool}  = require('../conexiones/configDB')
const pusher = require('../conexiones/configPusher')

let pgClient;

pool.connect((err, client)=> {
    if (err) {
        console.log(err);
    }    
    console.log("conexion ala base estacion");

    pgClient = client;
    
    client.on('notification', function (msg) {
        pusher.trigger('watch_dato_sensor', 'new_record', JSON.parse(msg.payload));
    });
    const query = client.query('LISTEN watch_dato_sensor');
});


exports.estacion= async(req, res) => {

let data = `SELECT * From public.estacion `;

const query = await pgClient.query(data, function select(error, result, fields) {

    if (error) {
    console.log(error);
    
    return query ;
}

 res.send(result.rows)

});
console.log("fin.");
};


exports.estacionid= async(req, res) => {
let data = `SELECT * From public.estacion WHERE "idEstacion"=${req.params.idEstacion}`;

const query = await pgClient.query(data, function select(error, result, fields) {

    if (error) {
    console.log(error);
    
    return query ;
}

 res.send(result.rows)

});
console.log("fin.");
};

exports.estacionNom= async(req, res) => {
let data = `SELECT "idSensor", "maxSensor", "minSensor","nombreSensor", "nombreEstacion"
From public.sensor INNER JOIN public.tiposensores ON sensor.fk_sensores = "id_tipoSensor"
INNER JOIN public.estacion ON sensor.fk_estacion = "idEstacion"
WHERE "nombreEstacion"='${req.params.nombreEstacion}'`;

const query = await pgClient.query(data, function select(error, result, fields) {

    if (error) {
    console.log(error);
    
    return query ;
}

 res.send(result.rows)

});
console.log("fin.");


};
