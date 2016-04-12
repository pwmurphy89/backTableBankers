
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
	// findLanguage()

	// findPopulation()

	// findGdp()




}); 