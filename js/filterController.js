interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location){
	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = popRanges;
	$scope.gdpRanges = gdpRanges;

	$scope.$on('$routeChangeSuccess', function() {

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

	$scope.doFilter = function(filterType){
		var newString = '';
		var option1Type = returnOptionType($routeParams.option1);
		var option2Type = returnOptionType($routeParams.option2);
		var option3Type = returnOptionType($routeParams.option3);

		if (filterType == 'one'){
			var newOptionType = returnOptionType($scope.selectedLanguage);
		} else if (filterType == 'two') {
			var newOptionType = returnOptionType($scope.selectedPopulation.id);
		} else if (filterType == 'three') {
			var newOptionType = returnOptionType($scope.selectedGDP.id);
		}
		var newOption = '';
		
		if (newOptionType == 'language'){
			newOption = $scope.selectedLanguage;
			if (option2Type == '' && option3Type == ''){
				newString = newOption;
			} else if (option3Type == ''){
				newString = newOption + '/' + $routeParams.option2;
			} else {
				newString = newOption + '/' + $routeParams.option2 + '/' + $routeParams.option3;
			}
		} else if (newOptionType == 'population'){
			newOption = $scope.selectedPopulation.id;
			if (option3Type == ''){
				newString = $routeParams.option1 + '/' + newOption;
			} else {
				newString = $routeParams.option1 + '/' + newOption + '/' + $routeParams.option3;
			}
		} else if (newOptionType == 'gdp'){
			newOption = $scope.selectedGDP.id;
			newString = $routeParams.option1 + '/' + $routeParams.option2 + '/' + newOption;
		}
		
		$location.path(newString);
	}

	$scope.resetMap = function(){
		$location.path('/');
        $scope.selectedLanguage = '';
        $scope.selectedPopulation = '';
        $scope.selectedGDP = '';
	};
});
