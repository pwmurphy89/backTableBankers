interactiveMap.controller('mapsController', function($scope, $http, $routeParams, $location, mapService){

	language = mapService.getLanguage($scope.selectedLanguage);
	population = mapService.getPop($scope.selectedPopulation);
	gdp = mapService.getGDP($scope.selectedGDP);


	// routeParams way of doing it:

	// language = $routeParams.language;
	// population = $routeParams.popId;
	// gdp = $routeParams.gdpId;


	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = popRanges;
	$scope.gdpRanges = gdpRanges;



	//validate variables from routeParams

	var languageBool = false;
	var populationBool = false;
	var gdpBool = false;


	if (language !== ''){
		drawLanguage();
	}

	if (population !== ''){
		drawPopulation();
	}

	if (gdp !== ''){
		drawGDP();
	}

	if (language !== '' && population !== ''){
		languageBool = true;
		populationBool = true;

	}

	function drawLanguage(){	
	
		data = {};	

			// Lists countries with selected language
		for(var i = 0; i < countries.length;i++){
			var x = Object.getOwnPropertyNames(countries[i].languages);
			if(x.indexOf(language) > -1){
				// Gets Value of selected language in countries that have it
				console.log(countries[i]);
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

		map.legend();	

	}

	function drawPopulation(){

		data = {};

		for(var i = 0; i < countries.length; i++){
			data[countries[i].countryCode] = {fillKey: "defaultFill"};
			var myPop = countries[i].totalPop;
			// need to add filter based on routeParams value (myPopId)	

			if (myPop < popRanges[0].value){
				data[countries[i].countryCode] = {fillKey: "LOW"};
			}else if(myPop < popRanges[1].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
			}else if(myPop < popRanges[2].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM"};
			}else if(myPop < popRanges[3].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
			}else {
				data[countries[i].countryCode] = {fillKey: "HIGH"};
			}    	
		}	

		if (population === 1){
			for (var key in data){
				if (data[key].fillKey !== "LOW"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else if (population === 2){
			for (var key in data){
				if (data[key].fillKey !== "MEDIUM-LOW"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else if (population === 3){
			for (var key in data){
				if (data[key].fillKey !== "MEDIUM"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else if (population === 4){
			for (var key in data){
				if (data[key].fillKey !== "MEDIUM-HIGH"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else
			for (var key in data){
				if (data[key].fillKey !== "HIGH"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}

	

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

		map.legend();
	}

	function drawGDP(){
		data = {};

		// also more needs to be done to get this working
		for(var i = 0; i < countries.length; i++){
			data[countries[i].countryCode] = {fillKey: "defaultFill"};
			var thisGDP = countries[i].gdp;
			// need to add filter based on routeParams value (gdp)
			if (thisGDP < gdpRanges[0].value){
				data[countries[i].countryCode] = {fillKey: "LOW"};
			}else if(thisGDP < gdpRanges[1].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
			}else if(thisGDP < gdpRanges[2].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM"};
			}else if(thisGDP < gdpRanges[3].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
			}else{
				data[countries[i].countryCode] = {fillKey: "HIGH"};
			}	
		}	



		if (gdp === 1){
			for (var key in data){
				if (data[key].fillKey !== "LOW"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else if (gdp === 2){
			for (var key in data){
				if (data[key].fillKey !== "MEDIUM-LOW"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else if (gdp === 3){
			for (var key in data){
				if (data[key].fillKey !== "MEDIUM"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else if (gdp === 4){
			for (var key in data){
				if (data[key].fillKey !== "MEDIUM-HIGH"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}else
			for (var key in data){
				if (data[key].fillKey !== "HIGH"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}	

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

		map.legend();
	}


});