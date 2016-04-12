var interactiveMap = angular.module('interactiveMap', ['ngRoute']);


interactiveMap.factory('languageService', function() {

    var currentLanguage = ""
   
    function set(language) {
        currentLanguage = language;
    }

    function get() {
        return currentLanguage;
    }

    return {
        set: set,
        get: get
    }
});

interactiveMap.run( function($rootScope, $location, $routeParams, $location, languageService) {
    $rootScope.$watch(function() {
        return $location.path();
    },
    function(a){
        if(a !== '/#'){
            console.log('url has changed: ' + a);
        }
    });
});

interactiveMap.config(function($routeProvider){

    $routeProvider.when('/#',{
        templateUrl: 'map.html',
        controller: 'homeMapController'
    });
    $routeProvider.when('/:language',{
        templateUrl: 'map.html',
        controller: 'languageController'
    });
    $routeProvider.otherwise({
        redirectoTo: '/#'
    });

});