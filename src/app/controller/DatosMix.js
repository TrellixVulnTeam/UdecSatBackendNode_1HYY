const { pool } = require('../conexiones/configDB')
const pusher = require('../conexiones/configPusher')
var twilio = require('twilio')
var client = new twilio('ACCOUNTSID', 'AUTHTOKEN')

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

exports.alerta = async (req, res) => {

    let data = `SELECT "idSensor", "maxSensor", "minSensor","nombreSensor", "nombreEstacion" From public.sensor  INNER JOIN public.tiposensores ON sensor.fk_sensores = "id_tipoSensor"
    INNER JOIN public.estacion ON sensor.fk_estacion = "idEstacion"`;

    const query = await pgClient.query(data, function select(error, result, fields) {
        if (error) {
            console.log(error);
            return query;
        } else {
            let numberSensor = result.rows.length;
            let mitadSEnsor = numberSensor / 2;
            console.log(result.rows.idSensor)
            const car = result.rows.map((row) => {
                let datas = `SELECT * From public.dato_sensor where "fk_sensor"= ${row.idSensor}
               ORDER BY "fecha" desc, "hora" desc limit 1`;
                const querys = pgClient.query(datas, function select(error, results, fields) {
                    if (error) {
                        return querys;
                    } else {
                        const cars = results.rows.map((rows) => {
                            if (+rows.valor >= +row.maxSensor) {
                                totalsi = totalsi + 1;
                            }
                            if (+totalsi <= +mitadSEnsor) {
                                return { "alerta": 1 }
                            }
                            return { "alerta": 0 }
                        });
                    }
                })
            });
            res.json(car);
            console.log(car);
        }
    })
};