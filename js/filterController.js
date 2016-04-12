
interactiveMap.controller('filterController', function($scope, $http, $routeParams){
	$scope.languages = languages;
	$scope.countries = countries;
	var data = {};
	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			defaultFill: '#CCC'
		}
	});

	$scope.findLanguage =function(){

		var map = new Datamap({
			element: document.getElementById('map'),
			fills: {
				HIGH: '#b80000',
				LOW: '#ff8080',
				MEDIUM: '#d93f3f',
				UNKNOWN: 'rgb(0,0,0)',
				defaultFill: '#ccc'
			},
			data
		});

		// Lists countries with selected language
	for(var i = 0; i < countries.length;i++){
		var x = Object.getOwnPropertyNames(countries[i].languages);
			if(x.indexOf($scope.selectedLanguage) > -1){
				// Gets Value of selected language in countries that have it
				console.log(countries[i]);
		    	var langPerc = countries[i].languages[$scope.selectedLanguage];
		    	console.log(langPerc);

		    		if (langPerc < 33){
		    			data[countries[i].countryCode] = {fillKey: "LOW"};
			    	}else if(langPerc<66){
			    		data[countries[i].countryCode] = {fillKey: "MEDIUM"};
			    	}else {
			    		data[countries[i].countryCode] = {fillKey: "HIGH"};
			    	}
					    	
				}
			}
	console.log(data)
}



	// findPopulation()

	// findGdp()

	// map.legend();


}); 