var express = require('express');
var bodyParser = require("body-parser");
app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/page.html');
});

app.post('/addition', function (req, res) {
    // console.log(req.body);
    // var chiffre1 = req.body.nb1;
    // var chiffre2 = req.body.nb2;
    // var chiffre3 = parseInt(chiffre1) + parseInt(chiffre2);
    // console.log(chiffre3);
    // res.send(""+chiffre3);
    res.send("" + faireAddition(req.body.nb1, req.body.nb2))
});

app.post('/multiplication', function (req, res) {
    res.send("" + faireMultiplication(req.body.nb1, req.body.nb2))
});
app.post('/soustraction', function (req, res) {
    res.send("" + faireSoustraction(req.body.nb1, req.body.nb2))
});
app.post('/division', function (req, res) {
    res.send("" + faireDivision(req.body.nb1, req.body.nb2))
});


function faireAddition(nb1, nb2) {
    var chiffre3 = 0;
    var chiffre1 = nb1;
    var chiffre2 = nb2;
    if (chiffre1 != undefined || chiffre2 != undefined) {
        chiffre3 = parseInt(chiffre1) + parseInt(chiffre2);
    }
    return chiffre3;
}


function faireMultiplication(nb1, nb2) {
    var chiffre3 = 0;
    var chiffre1 = nb1;
    var chiffre2 = nb2;
    if (chiffre1 != undefined || chiffre2 != undefined) {
        chiffre3 = parseInt(chiffre1) * parseInt(chiffre2);
    }
    return chiffre3;
}

function faireDivision(nb1, nb2) {
    var chiffre3 = 0;
    var chiffre1 = nb1;
    var chiffre2 = nb2;
    if (chiffre1 != undefined || chiffre2 != undefined) {
        chiffre3 = parseInt(chiffre1) / parseInt(chiffre2);
    }
    return chiffre3;
}

function faireSoustraction(nb1, nb2) {
    var chiffre3 = 0;
    var chiffre1 = nb1;
    var chiffre2 = nb2;
    if (chiffre1 != undefined || chiffre2 != undefined) {
        chiffre3 = parseInt(chiffre1) - parseInt(chiffre2);
    }
    return chiffre3;
}


// app.get('/', function (req, res) {
//     res.send(chiffre3);
// });


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