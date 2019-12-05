//set GOOGLE_APPLICATION_CREDENTIALS=[C:\Users\akulk\Documents\UFL\BIOInformatics\Align-the-Sequence-Game\public\js\align-that-sequence-firebase-adminsdk-gxjit-2a1a09cd61.json]
//enter the above command before starting server
var express = require("express");
var admin = require('firebase-admin');
var app = express();
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://align-that-sequence.firebaseio.com'
  });
  var database = admin.database();
  console.log(database)
app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});