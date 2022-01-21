var admin = require("firebase-admin");
var serviceAccount = require("../../../udecsat-2996a-firebase-adminsdk-m6j34-a110a09f6c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://udecsat-2996a-default-rtdb.firebaseio.com"
});

module.exports=admin;
  