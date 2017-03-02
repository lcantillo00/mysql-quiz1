var express = require('express');
var app = express();
var bodyParser= require('body-parser');

app.get('/', function(request, response) {
    response.send('Hello world!');
});

app.listen(8887, function() {
    console.log('Listening on port 8887...');
});
