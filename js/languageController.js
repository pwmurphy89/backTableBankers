interactiveMap.controller('languageController', function($scope, $http, $routeParams, $location, languageService){

	language = $routeParams.language;

	$scope.languages = languages;
	$scope.countries = countries;

	data = {};

			// Lists countries with selected language
		for(var i = 0; i < countries.length;i++){
			var x = Object.getOwnPropertyNames(countries[i].languages);
			if(x.indexOf(language) > -1){
				// Gets Value of selected language in countries that have it
		    	var langPerc = countries[i].languages[language];
	    		if(langPerc < 20){
	    			data[countries[i].countryCode] = {fillKey: "LOW"};
		    	}else if(langPerc<40){
		    		data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
		    	}else if(langPerc<60){
		    		data[countries[i].countryCode] = {fillKey: "MEDIUM"};
		    	}else if(langPerc<80){
		    		data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
		    	}else{
		    		data[countries[i].countryCode] = {fillKey: "HIGH"};
		    	};		    	
			};
		};

		var map = new Datamap({
			element: document.getElementById('map'),
			fills: {
				'HIGH': '#7d0000',
				'MEDIUM-HIGH': '#a61e1e',
				'MEDIUM': '#D95757',
				'MEDIUM-LOW': '#FF9C9C',
				'LOW': '#FFD6D6',
				defaultFill: '#ccc'
			},
			data
		});

		map.updateChoropleth(data);
		map.legend();
});