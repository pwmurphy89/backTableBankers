interactiveMap.controller('filterController', function($scope, $http, $routeParams, $location){
	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = popRanges;
	$scope.gdpRanges = gdpRanges;

	$scope.$on('$routeChangeSuccess', function() {

		var optionType1 = returnOptionType($routeParams.option1);
		var optionType2 = returnOptionType($routeParams.option2);
		var optionType3 = returnOptionType($routeParams.option3);

		if(optionType1 == 'language'){
			$scope.selectedLanguage = $routeParams.option1;
		}else if(optionType1 == 'population'){
			$scope.selectedPopulation = $routeParams.option1;
			for(var i = 0; i < popRanges.length;i++){
				if (popRanges[i].id == $routeParams.option1){
					$scope.selectedPopulation = popRanges[i];
				}
			}
		}else{
			for(var i = 0; i < gdpRanges.length;i++){
				if (gdpRanges[i].id == $routeParams.option1){
					$scope.selectedGDP = gdpRanges[i];
				}
			}
		}

		if(optionType2 == 'language'){
			$scope.selectedLanguage = $routeParams.option2;
		}else if(optionType2 == 'population'){
			$scope.selectedPopulation = $routeParams.option2;
			for(var i = 0; i < popRanges.length;i++){
				if (popRanges[i].id == $routeParams.option2){
					$scope.selectedPopulation = popRanges[i];
				}
			}
		}else{
			for(var i = 0; i < gdpRanges.length;i++){
				if (gdpRanges[i].id == $routeParams.option2){
					$scope.selectedGDP = gdpRanges[i];
				}
			}
		}

		if(optionType3 == 'language'){
			$scope.selectedLanguage = $routeParams.option3;
		}else if(optionType3 == 'population'){
			$scope.selectedPopulation = $routeParams.option3;
			for(var i = 0; i < popRanges.length;i++){
				if (popRanges[i].id == $routeParams.option3){
					$scope.selectedPopulation = popRanges[i];
				}
			}
		}else{
			for(var i = 0; i < gdpRanges.length;i++){
				if (gdpRanges[i].id == $routeParams.option3){
					$scope.selectedGDP = gdpRanges[i];
				}
			}
		}		
  	});

	$scope.doFilter = function(){
		var optionArray = [];
		if($scope.selectedLanguage){
			optionArray.push($scope.selectedLanguage);
		}
		if($scope.selectedPopulation){
			optionArray.push($scope.selectedPopulation.id);
		}
		if($scope.selectedGDP){
			optionArray.push($scope.selectedGDP.id);
		}
		$location.path(optionArray.join('/'));  
	}
});

