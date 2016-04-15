// the filter controller loads on page load
interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location){
	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = popRanges;
	$scope.gdpRanges = gdpRanges;

	// this function preserves the dropdown selections when the route is changed
	$scope.$on('$routeChangeSuccess', function(){
		// change the dropdown selections to match what's in the route parameters
		$scope.selectedLanguage = $routeParams.option1;

		for(var i = 0; i < popRanges.length;i++){
			if (popRanges[i].id == $routeParams.option2){
				$scope.selectedPopulation = popRanges[i];
			}
		}

		for(var i = 0; i < gdpRanges.length;i++){
			if (gdpRanges[i].id == $routeParams.option3){
				$scope.selectedGDP = gdpRanges[i];
			}
		}	
  	});

	// the doFilter function gets called when a dropdown option is changed
	$scope.doFilter = function(filterType){
		var newString = '';
		var option1Type = returnOptionType($routeParams.option1);
		var option2Type = returnOptionType($routeParams.option2);
		var option3Type = returnOptionType($routeParams.option3);
		var newOption = '';

		// you have selected a language
		if (filterType == 'one'){
			// get the new option from the dropdown menu
			newOption = $scope.selectedLanguage;
			// what if the other two route parameters are not selected?
			if (option2Type == '' && option3Type == ''){
				newString = newOption;
			} 
			// what if the last route parameter is not selected?
			else if (option3Type == ''){
				newString = newOption + '/' + $routeParams.option2;
			} 
			// otherwise build a string that includes all options
			else {
				newString = newOption + '/' + $routeParams.option2 + '/' + $routeParams.option3;
			}
		} 
		// you have selected a population range
		else if (filterType == 'two'){
			if (returnOptionType($routeParams.option2) == ''){
				newOption = '';
			} else {
				newOption = $scope.selectedPopulation.id;
			}
			if (option3Type == ''){
				newString = $routeParams.option1 + '/' + newOption;
			} else {
				newString = $routeParams.option1 + '/' + newOption + '/' + $routeParams.option3;
			}
		}
		// you have selected a gdp range
		else if (filterType == 'three'){
			newOption = $scope.selectedGDP.id;
			newString = $routeParams.option1 + '/' + $routeParams.option2 + '/' + newOption;
		}
		// write the new path to $location
		$location.path(newString);
	}

	$scope.resetMap = function(){
		$location.path('/');
        $scope.selectedLanguage = '';
        $scope.selectedPopulation = '';
        $scope.selectedGDP = '';
	};
});
