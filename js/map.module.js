var interactiveMap = angular.module('interactiveMap', ['ngRoute']);

interactiveMap.config(function($routeProvider){

    $routeProvider.when('/#',{
        templateUrl: 'index.html',
        controller: 'filterController'
    });
    // $routeProvider.when('/language',{
    //     templateUrl: 'blahblah.html',
    //     controller: 'blahblahController'
    // });
    $routeProvider.otherwise({
        redirectoTo: '/#'
    });

});