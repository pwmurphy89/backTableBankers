interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location){
	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = popRanges;
	$scope.gdpRanges = gdpRanges;

	var option1Type = returnOptionType($routeParams.option1);
	var option2Type = returnOptionType($routeParams.option2);
	var option3Type = returnOptionType($routeParams.option3);

	$scope.doFilter = function(filterType){
		var newString = '';
		option1Type = returnOptionType($routeParams.option1);
		option2Type = returnOptionType($routeParams.option2);
		option3Type = returnOptionType($routeParams.option3);

		if (filterType == 'one'){
			var newOptionType = returnOptionType($scope.newOption);
		} else {
			var newOptionType = returnOptionType($scope.newOption.id);
		}
		var newOption = '';
		console.log(newOptionType);
		
		if (newOptionType == 'language'){
			newOption = $scope.newOption;
			if (option2Type == '' && option3Type == ''){
				newString = newOption;
			} else if (option3Type == ''){
				newString = newOption + '/' + $routeParams.option2;
			} else {
				newString = newOption + '/' + $routeParams.option2 + '/' + $routeParams.option3;
			}
		} else if (newOptionType == 'population'){
			newOption = $scope.newOption.id;
			if (option3Type == ''){
				newString = $routeParams.option1 + '/' + newOption;
			} else {
				newString = $routeParams.option1 + '/' + newOption + '/' + $routeParams.option3;
			}
		} else if (newOptionType == 'gdp'){
			newOption = $scope.newOption.id;
			newString = $routeParams.option1 + '/' + $routeParams.option2 + '/' + newOption;
		}
		// what if the option has already been selected?
		if (newOptionType == option1Type) {
			// if we change language after setting other params, we go here...
			newOption = $scope.newOption;
			// otherwise put the new option at the beginning
			if (option2Type == '' && option3Type == ''){
				newString = newOption;
			} else if (option3Type == ''){
				newString = newOption + '/' + $routeParams.option2;
			} else {
				newString = newOption + '/' + $routeParams.option2 + '/' + $routeParams.option3;
			}
		} else if (newOptionType == option2Type) {
			newOption = $scope.newOption.id;
			if (option3Type == ''){
				newString = $routeParams.option1 + '/' + newOption;
			} else {
				newString = $routeParams.option1 + '/' + newOption + '/' + $routeParams.option3;
			}
		} else if (newOptionType == option3Type) {
			newOption = $scope.newOption.id;
			newString = $routeParams.option1 + '/' + $routeParams.option2 + '/' + newOption;
		}
		// change the path
		$location.path(newString);
	}
});