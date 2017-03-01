angular
    .module('angular.dashboard')
    .controller('DashboardCtrl', DashboardCtrl)


//brain of our view happens before view is set up
function DashboardCtrl($scope){
    var vm = this;
    vm.foo = 'bar'
}