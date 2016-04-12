
interactiveMap.controller('filterController', function($scope, $http, $routeParams){

	var map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			HIGH: '#b80000',
			LOW: '#ff8080',
			MEDIUM: '#d93f3f',
			UNKNOWN: 'rgb(0,0,0)',
			defaultFill: '#ccc'
		},
		data: {
			ESP: {
				fillKey: 'HIGH'
			},
			MEX: {
				fillKey: 'HIGH'
			},
			USA: {
				fillKey: 'MEDIUM'
			},
			GBR: {
				fillKey: 'LOW'
			}
		}
	});

	map.legend();

	$scope.languages = languages;
	$scope.countries = countries;

	$scope.findLanguage =function(){

		// Lists countries with selected language
		for(var i = 0; i < countries.length;i++){
				var x = Object.getOwnPropertyNames(countries[i].languages);
				if(x.indexOf($scope.selectedLanguage) > -1){

					console.log(countries[i]);
				}
		}
	}

	// findPopulation()

	// findGdp()




}); 