var interactiveMap = angular.module('interactiveMap', ['ngRoute']);

interactiveMap.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'map.html',
        controller: 'homeMapController'
    });
    $routeProvider.when('/:option1',{
        templateUrl: 'map.html',
        controller: 'mapsController'
    });
    $routeProvider.when('/:option1/:option2',{
        templateUrl: 'map.html',
        controller: 'mapsController'
    });
    $routeProvider.when('/:option1/:option2/:option3',{
        templateUrl: 'map.html',
        controller: 'mapsController'
    });
    $routeProvider.otherwise({
        redirecTo: '/'
    });
});