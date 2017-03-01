// this scrapes scientific american
var request = require('request');
var cheerio = require('cheerio')
var express = require('express')
var app = express()


//send to routes.js
module.exports = {

    // this scrapes scientifc american and puts object into an array
    sciMerica: function(){

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
                console.log(videoArray)
        })//request

    }//sciMerica

}//module.exports