var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5011));

app.get('/', function (req, res) {
    res.end("Hello world2");
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

