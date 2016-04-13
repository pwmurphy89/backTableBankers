var interactiveMap = angular.module('interactiveMap', ['ngRoute']);

interactiveMap.factory('languageService', function() {

    var currentLanguage = "";
   
    function set(language) {
        currentLanguage = language;
    };

    function get() {
        return currentLanguage;
    };

    return {
        set: set,
        get: get
    };
});

interactiveMap.factory('popService', function() {

    var currentPop = "";
   
    function set(population) {
        currentPop = population;
    };

    function get() {
        return currentPop;
    };

    return {
        set: set,
        get: get
    };
});

interactiveMap.factory('gdpService', function() {

    var currentGDP = "";
   
    function set(gdp) {
        currentGDP = gdp;
    };

    function get() {
        return currentGDP;
    };

    return {
        set: set,
        get: get
    };
});

interactiveMap.run( function($rootScope, $location, $routeParams, $location, languageService, popService, gdpService) {
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
    $routeProvider.when('/:language',{
        templateUrl: 'map.html',
        controller: 'languageController'
    });
    $routeProvider.when('/gdp/:gdp',{
        templateUrl: 'map.html',
        controller: 'gdpController'
    });
    $routeProvider.when('/pop/:population',{
        templateUrl: 'map.html',
        controller: 'popController'
    });
    $routeProvider.otherwise({
        redirectoTo: '/#'
    });
});