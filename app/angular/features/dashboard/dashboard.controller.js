angular
    .module('angular.dashboard')
    .controller('DashboardCtrl', DashboardCtrl)


//brain of our view happens before view is set up
function DashboardCtrl($http){
    var vm = this;

    //api call
    $http.get('/scraper').then(function(response){
        // videoArray = [{title: sometitle, link: link2sometitle}, {title: sometitle2, link:link2somteitle2}...}
        vm.videoArray = response.data
    })
}