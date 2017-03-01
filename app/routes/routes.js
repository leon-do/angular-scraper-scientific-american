var express = require('express')
var router = express.Router();
var scraper = require('../controller/scraper.js') //FORWARD get video info from scraper.js 


//FORWARD: calls the function from scraper.js. & puts the array in router & export to server.js
router.get('/scraper', function(request, response){
    scraper.sciMerica(function(videoArray){
        //is array is sent BACK from scraper.js
        response.send(videoArray)
    })
})

//BACK: send to server.js
module.exports = router;