// this scrapes scientific american
var request = require('request');
var cheerio = require('cheerio')


//BACK: send to routes.js
module.exports = {

    // this scrapes scientifc american and puts object into an array
    sciMerica: function(callback){

        request('https://www.scientificamerican.com/video/', function (error, response, html){
                //jqueryifiy
                var $ = cheerio.load(html)
                
                //put objects inside of array
                var videoArray = [];

                //loop through everything with class name .t_small-listing-title
                $('.t_small-listing-title').each(function(index, element){
                    var title = $(this).text()
                    var link = $(this).children().attr('href')
                    
                    videoArray.push({title:title, link:link})
                })

                // videoArray = [{title: sometitle, link: link2sometitle}, {title: sometitle2, link:link2somteitle2}...}
                //console.log(videoArray)

                callback(videoArray);

        })//request

    }//sciMerica

}//module.exports