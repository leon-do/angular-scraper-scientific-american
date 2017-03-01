// routes for dashboard to exend the module

angular
    .module('angular.dashboard')
    .config(dashboardConfig); //takes a function as a property


function dashboardConfig($stateProvider){
    $stateProvider.state({
        name: 'dashboard',
        url: '/',
        templateUrl: '/angular/features/dashboard/dashboard.html', //link
        controller: 'DashboardCtrl', //capital D end in Ctrl
        controllerAs: 'DashboardVM' // capital D end in VM (view model)
    });
}