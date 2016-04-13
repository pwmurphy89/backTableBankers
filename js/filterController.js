interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location, mapService){

	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = popRanges;
	$scope.gdpRanges = gdpRanges;

	$scope.findLanguage = function(){
		mapService.setLanguage($scope.selectedLanguage);

		// var currLang = mapService.getLanguage();

		// var currGDP = mapService.getGDP();
		// var currPop = mapService.getPop();
		/* if (currGDP == '' && currPop == '') {
			$location.path(currLang);
		} else if (currGDP == '') {
			$location.path(currLang + '/' + currPop);
		} else {
			$location.path(currLang + '/' + currPop + '/' + currGDP);
		} */
		// var myPath = $location.path();
		$location.path($scope.selectedLanguage);
	}

	$scope.findPopulation = function(){
		mapService.setPop($scope.selectedPopulation.id);
		// var currPop = mapService.getPop();
		// var currGDP = mapService.getGDP();
		// var currLang = mapService.getLanguage();
		// var myPath = $location.path();
		$location.path('/population' + $scope.selectedPopulation.id);
	}

	$scope.findGdp = function(){
		mapService.setGDP($scope.selectedGDP.id);
		// var currGDP = mapService.getGDP();
		// var currLang = mapService.getLanguage();
		// var currPop = mapService.getPop();
		// var myPath = $location.path();
		$location.path('/gdp' + $scope.selectedGDP.id);
	}

}); 