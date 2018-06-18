var express = require('express');
var bodyParser = require("body-parser");
app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/page.html');
});

app.post('/form', function (req, res) {
    var chiffre1 = req.body.chiffre1;
    var chiffre2 = req.body.chiffre2;
    var chiffre3 = parseInt(chiffre1) + parseInt(chiffre2);
});

app.listen(3005);

// var express = require('express');
// var bodyParser = require("body-parser");

// // serveur html
// var server = express();
// server.use(bodyParser.urlencoded({ extended: true }));
// server.listen(3005);

// server.get('/page.html', function(request, response) {
//   response.sendFile( __dirname  + '/page.html');
// });

// server.post('/post.html', function(request, response) {
//   var p1 = request.body.p1; 
//   console.log("p1=" + p1);
// });