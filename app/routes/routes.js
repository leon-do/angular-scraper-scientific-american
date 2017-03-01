var express = require('express')
var app = express()
var scraper = require('../controller/scraper.js') //get video info from scraper.js 


//calls the function from scraper.js (returns the array)
scraper.sciMerica()

exports.routes = function(){
    app.get('/api', function(request, response){
        response.send('sdfs')
    })
}