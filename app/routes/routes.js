var express = require('express')
var router = express.Router();
var scraper = require('../controller/scraper.js') //get video info from scraper.js 


//calls the function from scraper.js. & puts the array on the interweb
router.get('/scraper', function(request, response){
    scraper.sciMerica(function(videoArray){
        response.send(videoArray)
    })
})

module.exports = router;