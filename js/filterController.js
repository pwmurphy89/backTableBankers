interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location, popService, gdpService, languageService){

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
		languageService.set($scope.selectedLanguage);
		$location.path($scope.selectedLanguage);
	}

	$scope.findPopulation = function(){
		popService.set($scope.selectedPopulation);
		$location.path($scope.selectedPopulation);
	}

	$scope.findGdp = function(){
		gdpService.set($scope.selectedGDP);
		$location.path($scope.selectedGDP);
	}

}); 