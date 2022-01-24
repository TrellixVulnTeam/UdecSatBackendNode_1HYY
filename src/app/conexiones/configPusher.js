const dotenv = require( 'dotenv');
dotenv.config();

const Pusher = require( 'pusher');

// Create an instance of Pusher
 const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
    });
    
    module.exports = pusher