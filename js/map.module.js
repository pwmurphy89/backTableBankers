var interactiveMap = angular.module('interactiveMap', ['ngRoute']);

interactiveMap.factory('mapService', function(){
    // get all variables and return the map

    var currentLanguage = '';
    var currentPop = '';
    var currentGDP = '';

    function setLanguage(language){
        currentLanguage = language;
    }

    function getLanguage(){
        return currentLanguage;
    }

    function setPop(population){
        currentPop = population;
    }

    function getPop(){
        return currentPop;
    }

    function setGDP(gdp){
        currentGDP = gdp;
    }

    function getGDP(){
        return currentGDP;
    }

    /* function getMap(){
        // take local variables and run map
        return 'mapStuff';
    } */

    return {
        setLanguage: setLanguage,
        getLanguage: getLanguage,
        setPop: setPop,
        getPop: getPop,
        setGDP: setGDP,
        getGDP: getGDP
    }
});

interactiveMap.run( function($rootScope, $location, $routeParams, $location, mapService) {
    $rootScope.$watch(function() {
        return $location.path();
    },
    function(a){
        if(a !== '/#'){
            console.log('url has changed: ' + a);
        };
    });
});

interactiveMap.config(function($routeProvider){
    $routeProvider.when('/#',{
        templateUrl: 'map.html',
        controller: 'homeMapController'
    });
    $routeProvider.when('/lang:language*',{
        templateUrl: 'map.html',
        controller: 'languageController'
    });
    $routeProvider.when('/lang:language/population:popId*',{
        templateUrl: 'map.html',
        controller: 'popController'
    });
    $routeProvider.when('/lang:language/population:popId/gdp:gdpId',{
        templateUrl: 'map.html',
        controller: 'gdpController'
    });
    $routeProvider.otherwise({
        redirectoTo: '/#'
    });
});