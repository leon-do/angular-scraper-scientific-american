/*========================================================================
FORWARD     server.js --> routes --> scraper.js (get videoArray)
BACK        scraper.js --> routes --> server.js (displays videoArray)
========================================================================*/

var express = require('express');
var app = express();

// display angular stuff
app.use(express.static(__dirname + "/app"));

// FORWARD
var routes = require('./app/routes/routes.js')

//BACK: recievs and displays data from routes.js
app.use('/', routes);


app.listen(process.env.PORT || 3000);