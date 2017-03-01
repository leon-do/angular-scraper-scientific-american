/*
this is the angular application
angular is global
 module as two aruments:
  1. name of module from index.html
  2. [dependencies]
*/


angular
    .module("angular", ['ui.router', 'angular.dashboard'])
    .config(angularConfig)


function angularConfig($urlRouterProvider){
    $urlRouterProvider.otherwise('/') //go here if route does not exist
 
}