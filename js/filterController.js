
interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location, languageService){

	$scope.languages = languages;
	$scope.countries = countries;


	$scope.findLanguage =function(){

		languageService.set($scope.selectedLanguage);
		$location.path($scope.selectedLanguage);

	}




	// findPopulation()

	// findGdp()




}); 