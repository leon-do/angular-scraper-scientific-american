var express = require('express');
var scraper = require('./app/controller/scraper.js')
var routes = require('./app/routes/routes.js')
var app = express();
var port = 3000;

app.get('/api', function(response, request){
    response.send('sdfsdf')
})

app.use(express.static(__dirname + "/app"));



app.listen(port, function() {
    console.log("listening on port:" + port);
});

