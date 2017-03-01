var express = require('express');
var app = express();
var routes = require('./app/routes/routes.js')


app.use(express.static(__dirname + "/app"));

//use routes in routes.js
app.use('/', routes);


app.listen(process.env.PORT || 3000);

