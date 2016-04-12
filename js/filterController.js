
interactiveMap.controller('filterController', function($scope, $http, $routeParams){
	$scope.languages = languages;
	$scope.countries = countries;
	var data = {};
	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			HIGH: '#b80000',
			LOW: '#ff8080',
			MEDIUM: '#d93f3f',
			UNKNOWN: 'rgb(0,0,0)',
			defaultFill: '#ccc'
			}

	});

	$scope.findLanguage =function(){
		// Lists countries with selected language
	for(var i = 0; i < countries.length;i++){
		data[countries[i].countryCode] = {fillKey: "defaultFill"};
		var x = Object.getOwnPropertyNames(countries[i].languages);
			if(x.indexOf($scope.selectedLanguage) > -1){
				// Gets Value of selected language in countries that have it
		    	var langPerc = countries[i].languages[$scope.selectedLanguage];
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
	$scope.map.updateChoropleth(data);
}
	// findPopulation()
	// findGdp()
	$scope.map.legend();
}); 