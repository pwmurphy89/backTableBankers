interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location, mapService){

	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = [
		{
			id: 1,
			label: "less than 1 million",
			value: 1000000
		},
		{
			id: 2,
			label: "1 -- 10 million",
			value: 10000000
		},
		{
			id: 3,
			label: "10 -- 100 million",
			value: 100000000
		},
		{
			id: 4,
			label: "100 million -- 1 billion",
			value: 100000000
		},
		{
			id: 5,
			label: "over 1 billion",
			value: 1000000000
		}];

	$scope.gdpRanges = [
		{
			id: 1,
			label: "less than 1 billion",
			value: 1000000000
		},
		{
			id: 2,
			label: "10 -- 100 million",
			value: 10000000000
		},
		{
			id: 3,
			label: "100 billion -- 1 trillion",
			value: 100000000000
		},
		{
			id: 4,
			label: "1 -- 10 trillion",
			value: 1000000000000
		},
		{
			id: 5,
			label: "over 10 trillion",
			value: 10000000000000
		},
	];

	$scope.findLanguage = function(){
		mapService.setLanguage($scope.selectedLanguage);
		var currLang = mapService.getLanguage();
		var currGDP = mapService.getGDP();
		var currPop = mapService.getPop();
		/* if (currGDP == '' && currPop == '') {
			$location.path(currLang);
		} else if (currGDP == '') {
			$location.path(currLang + '/' + currPop);
		} else {
			$location.path(currLang + '/' + currPop + '/' + currGDP);
		} */
		var myPath = $location.path();
		$location.path('/lang' + currLang);
	}

	$scope.findPopulation = function(){
		mapService.setPop($scope.selectedPopulation.id);
		var currPop = mapService.getPop();
		var currGDP = mapService.getGDP();
		var currLang = mapService.getLanguage();
		var myPath = $location.path();
		$location.path('/population' + currPop);
	}

	$scope.findGdp = function(){
		mapService.setGDP($scope.selectedGDP.id);
		var currGDP = mapService.getGDP();
		var currLang = mapService.getLanguage();
		var currPop = mapService.getPop();
		var myPath = $location.path();
		$location.path('/gdp' + currGDP);
	}

}); 