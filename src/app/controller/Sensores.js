const { pool} = require('../conexiones/configDB')
const pusher = require('../conexiones/configPusher')

let pgClient;

pool.connect((err, client) =>{
    if (err) {
        console.log(err);
    }
    
console.log("conexion ala base sensor");
    pgClient = client;
    client.on('notification', function (msg) {
        pusher.trigger('watch_dato_sensor', 'new_record', JSON.parse(msg.payload));
    });
    const query = client.query('LISTEN watch_dato_sensor');
});


exports.sensores = async(req, res) => {
    

let data = `SELECT "idSensor", "maxSensor", "minSensor","nombreSensor", "nombreEstacion"
From public.sensor  INNER JOIN public.tiposensores ON sensor.fk_sensores = "id_tipoSensor"
INNER JOIN public.estacion ON sensor.fk_estacion = "idEstacion"`;

const query = await pgClient.query(data, function select(error, result, fields) {

if (error) {
console.log(error);
return query ;
}

 res.send(result.rows)

});
console.log("fin.");
};

exports.sensoresid = async(req, res) => {
let data = `SELECT "idSensor", "maxSensor", "minSensor","nombreSensor", "nombreEstacion"
From public.sensor  INNER JOIN public.tiposensores ON sensor.fk_sensores = "id_tipoSensor"
INNER JOIN public.estacion ON sensor.fk_estacion = "idEstacion"
WHERE "idSensor"=${req.params.idSensor}`;

const query = await pgClient.query(data, function select(error, result, fields) {

    if (error) {
    console.log(error);
    
    return query ;
}

 res.send(result.rows)

});
console.log("fin.");
};

exports.sensoresciudad = async(req, res) => {
    

    let data = `SELECT "idSensor", "maxSensor", "minSensor","nombreSensor", "nombreEstacion"
    From public.sensor  INNER JOIN public.tiposensores ON sensor.fk_sensores = "id_tipoSensor"
    INNER JOIN public.estacion ON sensor.fk_estacion = "idEstacion" WHERE estacion.id_ciudad =${req.params.id_ciudad}`;
    
    const query = await pgClient.query(data, function select(error, result, fields) {
    
    if (error) {
    console.log(error);
    return query ;
    }
    
     res.send(result.rows)
    
    });
    console.log("fin.");
    };
