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




<<<<<<< Updated upstream
	data = {};

	if (language !== ''){

=======
	drawLanguage();
	drawPopulation();
	drawGDP();


	if (language !== '' && population !== '' && gdp !== ''){
		masterData = combine3(langData, popData, gdpData);
		console.log(masterData);
		drawMap(masterData);
	}
	else if (language !== '' && population !== ''){
		masterData = combine2(langData, popData);
		drawMap(masterData);
	}
	else if (population  !== '' && gdp !== ''){
		masterData = combine2(popData, gdpData);
		drawMap(masterData);
	}
	else if (language !== '' && gdp !== ''){
		masterData = combine2(langData, gdpData);
		drawMap(masterData);
	}
	else if (language !== ''){
		drawMap(langData);
	}
	else if (population !== ''){
		drawMap(popData);
	}
	else if (gdp !== ''){
		drawMap(gdpData);
	}


	function combine2(primaryObj, secondaryObj){
		for(var key in primaryObj){
			if(secondaryObj.hasOwnProperty(key)){
			}else{
				delete primaryObj[key];
			}			
		}
		return primaryObj;
	}

	function combine3(primaryObj, secondaryOneObj, secondaryTwoObj){
		for(var key in primaryObj){
			if(secondaryOneObj.hasOwnProperty(key) && secondaryTwoObj.hasOwnProperty(key)){
			}else{
				delete primaryObj[key];
			}	
		}
		return primaryObj;
	}

	function drawLanguage(){	
		console.log("Calculating Languages");
		langData = {};	
			// Lists countries with selected language
>>>>>>> Stashed changes
		for(var i = 0; i < countries.length;i++){
			var x = Object.getOwnPropertyNames(countries[i].languages);
			if(x.indexOf(language) > -1){
				// Gets Value of selected language in countries that have it
		    	var langPerc = countries[i].languages[language];
	    		if(langPerc < 20){
	    			langData[countries[i].countryCode] = {fillKey: "LOW"};
		    	}else if(langPerc<40){
		    		langData[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
		    	}else if(langPerc<60){
		    		langData[countries[i].countryCode] = {fillKey: "MEDIUM"};
		    	}else if(langPerc<80){
		    		langData[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
		    	}else{
		    		langData[countries[i].countryCode] = {fillKey: "HIGH"};
		    	};		    	
			};
<<<<<<< Updated upstream
		};
	};

	if (population !== ''){

=======
		};	
	}

	function drawPopulation(){
		console.log("Calculating Population");
		popData = {};
>>>>>>> Stashed changes
		for(var i = 0; i < countries.length; i++){
			popData[countries[i].countryCode] = {fillKey: "defaultFill"};
			var myPop = countries[i].totalPop;
			// need to add filter based on routeParams value (myPopId)	

			if (myPop < popRanges[0].value){
				popData[countries[i].countryCode] = {fillKey: "LOW"};
			}else if(myPop < popRanges[1].value){
				popData[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
			}else if(myPop < popRanges[2].value){
				popData[countries[i].countryCode] = {fillKey: "MEDIUM"};
			}else if(myPop < popRanges[3].value){
				popData[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
			}else {
				popData[countries[i].countryCode] = {fillKey: "HIGH"};
			}    	
		}	

		if (population === 1){
			for (var key in popData){
				if (popData[key].fillKey !== "LOW"){
					delete popData[key];
				}
			}
		}else if (population === 2){
			for (var key in popData){
				if (popData[key].fillKey !== "MEDIUM-LOW"){
					delete popData[key];
				}
			}
		}else if (population === 3){
			for (var key in popData){
				if (popData[key].fillKey !== "MEDIUM"){
					delete popData[key];
				}
			}
		}else if (population === 4){
			for (var key in popData){
				if (popData[key].fillKey !== "MEDIUM-HIGH"){
					delete popData[key];
				}
			}
<<<<<<< Updated upstream
		}else{
			for (var key in data){
				if (data[key].fillKey !== "HIGH"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}
		}
	};

	if (gdp !== ''){

=======
		}else
			for (var key in popData){
				if (popData[key].fillKey !== "HIGH"){
					delete popData[key];
				}
			}
	}

	function drawGDP(){
		console.log("Calculating GDP");
		gdpData = {};
		// also more needs to be done to get this working
>>>>>>> Stashed changes
		for(var i = 0; i < countries.length; i++){
			gdpData[countries[i].countryCode] = {fillKey: "defaultFill"};
			var thisGDP = countries[i].gdp;
			// need to add filter based on routeParams value (gdp)
			if (thisGDP < gdpRanges[0].value){
				gdpData[countries[i].countryCode] = {fillKey: "LOW"};
			}else if(thisGDP < gdpRanges[1].value){
				gdpData[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
			}else if(thisGDP < gdpRanges[2].value){
				gdpData[countries[i].countryCode] = {fillKey: "MEDIUM"};
			}else if(thisGDP < gdpRanges[3].value){
				gdpData[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
			}else{
				gdpData[countries[i].countryCode] = {fillKey: "HIGH"};
			}	
		}	

		if (gdp === 1){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "LOW"){
					delete gdpData[key];
				}
			}
		}else if (gdp === 2){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "MEDIUM-LOW"){
					delete gdpData[key];
				}
			}
		}else if (gdp === 3){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "MEDIUM"){
					delete gdpData[key];
				}
			}
		}else if (gdp === 4){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "MEDIUM-HIGH"){
					delete gdpData[key];
				}
			}
<<<<<<< Updated upstream
		}else{
			for (var key in data){
				if (data[key].fillKey !== "HIGH"){
					data[key].fillKey = {fillKey: "defaultFill"};
				}
			}	
		}
	};

	if (language !== '' && population !== ''){

		for (var i = 0; i < countries.length; i++){
			var langPerc = countries[i].languages[language];
			var thisPop = countries[i].totalPop;


			if (langPerc && thisPop < popRanges[0].value){
				data[countries[i].countryCode] = {fillKey: "LOW"};
			}else if (langPerc && thisPop < popRanges[1].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
			}else if (langPerc && thisPop < popRanges[2].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM"};
			}else if (langPerc && thisPop < popRanges[3].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
			}else{
				data[countries[i].countryCode] = {fillKey: "HIGH"};
			};

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
			}else if (population === 5){
				for (var key in data){
					if (data[key].fillKey !== "HIGH"){
						data[key].fillKey = {fillKey: "defaultFill"};
					}
				}	
			}
		}
	}

	if (language !== '' && gdp !== ''){

		for (var i = 0; i < countries.length; i++){
			var langPerc = countries[i].languages[language];
			var thisGDP = countries[i].gdp;


			if (langPerc && thisGDP < gdpRanges[0].value){
				data[countries[i].countryCode] = {fillKey: "LOW"};
			}else if (langPerc && thisGDP < gdpRanges[1].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
			}else if (langPerc && thisGDP < gdpRanges[2].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM"};
			}else if (langPerc && thisGDP < gdpRanges[3].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
			}else{
				data[countries[i].countryCode] = {fillKey: "HIGH"};
			};

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
			}else if (gdp === 5){
				for (var key in data){
					if (data[key].fillKey !== "HIGH"){
						data[key].fillKey = {fillKey: "defaultFill"};
					}
				}	
			}
		}
	}

	// if (population !== '' && gdp !== ''){

	// 	for (var i = 0; i < countries.length; i++){
	// 		var langPerc = countries[i].languages[language];
	// 		var thisGDP = countries[i].gdp;


	// 		if (langPerc && thisGDP < gdpRanges[0].value){
	// 			data[countries[i].countryCode] = {fillKey: "LOW"};
	// 		}else if (langPerc && thisGDP < gdpRanges[1].value){
	// 			data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
	// 		}else if (langPerc && thisGDP < gdpRanges[2].value){
	// 			data[countries[i].countryCode] = {fillKey: "MEDIUM"};
	// 		}else if (langPerc && thisGDP < gdpRanges[3].value){
	// 			data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
	// 		}else{
	// 			data[countries[i].countryCode] = {fillKey: "HIGH"};
	// 		};

	// 		if (gdp === 1){
	// 			for (var key in data){
	// 				if (data[key].fillKey !== "LOW"){
	// 					data[key].fillKey = {fillKey: "defaultFill"};
	// 				}
	// 			}
	// 		}else if (gdp === 2){
	// 			for (var key in data){
	// 				if (data[key].fillKey !== "MEDIUM-LOW"){
	// 					data[key].fillKey = {fillKey: "defaultFill"};
	// 				}
	// 			}
	// 		}else if (gdp === 3){
	// 			for (var key in data){
	// 				if (data[key].fillKey !== "MEDIUM"){
	// 					data[key].fillKey = {fillKey: "defaultFill"};
	// 				}
	// 			}
	// 		}else if (gdp === 4){
	// 			for (var key in data){
	// 				if (data[key].fillKey !== "MEDIUM-HIGH"){
	// 					data[key].fillKey = {fillKey: "defaultFill"};
	// 				}
	// 			}
	// 		}else if (gdp === 5){
	// 			for (var key in data){
	// 				if (data[key].fillKey !== "HIGH"){
	// 					data[key].fillKey = {fillKey: "defaultFill"};
	// 				}
	// 			}	
	// 		}
	// 	}
	// }

if (language !== '' && population !== '' && gdp !== ''){

		for (var i = 0; i < countries.length; i++){
			var langPerc = countries[i].languages[language];
			var thisPop = countries[i].totalPop;
			var thisGDP = countries[i].gdp;


			if (langPerc && thisGDP < gdpRanges[0].value && thisPop < popRanges[0].value){
				data[countries[i].countryCode] = {fillKey: "LOW"};
			}else if (langPerc && thisGDP < gdpRanges[1].value && thisPop < popRanges[1].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
			}else if (langPerc && thisGDP < gdpRanges[2].value && thisPop < popRanges[2].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM"};
			}else if (langPerc && thisGDP < gdpRanges[3].value && thisPop < popRanges[3].value){
				data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
			}else{
				data[countries[i].countryCode] = {fillKey: "HIGH"};
			};

			if (population === 1 && gdp === 1){
				for (var key in data){
					if (data[key].fillKey !== "LOW"){
						data[key].fillKey = {fillKey: "defaultFill"};
					}
				}
			}else if (population === 2 && gdp === 2){
				for (var key in data){
					if (data[key].fillKey !== "MEDIUM-LOW"){
						data[key].fillKey = {fillKey: "defaultFill"};
					}
				}
			}else if (population === 3 && gdp === 3){
				for (var key in data){
					if (data[key].fillKey !== "MEDIUM"){
						data[key].fillKey = {fillKey: "defaultFill"};
					}
				}
			}else if (population === 4 && gdp === 4){
				for (var key in data){
					if (data[key].fillKey !== "MEDIUM-HIGH"){
						data[key].fillKey = {fillKey: "defaultFill"};
					}
				}
			}else if (population === 5 && gdp === 5){
				for (var key in data){
					if (data[key].fillKey !== "HIGH"){
						data[key].fillKey = {fillKey: "defaultFill"};
					}
				}	
			}
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

});




	





	














// 	//validate variables from routeParams

// 	var languageBool = false;
// 	var populationBool = false;
// 	var gdpBool = false;


// 	if (language !== ''){
// 		languageBool = true;
// 		drawLanguage();
// 	}

// 	if (population !== ''){
// 		populationBool = true;
// 		drawPopulation();
// 	}

// 	if (gdp !== ''){
// 		gdpBool = true;
// 		drawGDP();
// 	}

// 	if (language !== '' && population !== ''){
// 		languageBool = true;
// 		populationBool = true;

// 	}

// 	function drawLanguage(){	
	
// 		data = {};	

// 			// Lists countries with selected language
// 		for(var i = 0; i < countries.length;i++){
// 			var x = Object.getOwnPropertyNames(countries[i].languages);
// 			if(x.indexOf(language) > -1){
// 				// Gets Value of selected language in countries that have it
// 				console.log(countries[i]);
// 		    	var langPerc = countries[i].languages[language];
// 	    		if(langPerc < 20){
// 	    			data[countries[i].countryCode] = {fillKey: "LOW"};
// 		    	}else if(langPerc<40){
// 		    		data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
// 		    	}else if(langPerc<60){
// 		    		data[countries[i].countryCode] = {fillKey: "MEDIUM"};
// 		    	}else if(langPerc<80){
// 		    		data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
// 		    	}else{
// 		    		data[countries[i].countryCode] = {fillKey: "HIGH"};
// 		    	};		    	
// 			};
// 		};

// 		var map = new Datamap({
// 			element: document.getElementById('map'),
// 			fills: {
// 				'HIGH': '#7d0000',
// 				'MEDIUM-HIGH': '#a61e1e',
// 				'MEDIUM': '#D95757',
// 				'MEDIUM-LOW': '#FF9C9C',
// 				'LOW': '#FFD6D6',
// 				defaultFill: '#ccc'
// 			},
// 			data
// 		});	

// 		map.legend();	

// 	}

// 	function drawPopulation(){

// 		data = {};

// 		for(var i = 0; i < countries.length; i++){
// 			data[countries[i].countryCode] = {fillKey: "defaultFill"};
// 			var myPop = countries[i].totalPop;
// 			// need to add filter based on routeParams value (myPopId)	

// 			if (myPop < popRanges[0].value){
// 				data[countries[i].countryCode] = {fillKey: "LOW"};
// 			}else if(myPop < popRanges[1].value){
// 				data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
// 			}else if(myPop < popRanges[2].value){
// 				data[countries[i].countryCode] = {fillKey: "MEDIUM"};
// 			}else if(myPop < popRanges[3].value){
// 				data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
// 			}else {
// 				data[countries[i].countryCode] = {fillKey: "HIGH"};
// 			}    	
// 		}	

// 		if (population === 1){
// 			for (var key in data){
// 				if (data[key].fillKey !== "LOW"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else if (population === 2){
// 			for (var key in data){
// 				if (data[key].fillKey !== "MEDIUM-LOW"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else if (population === 3){
// 			for (var key in data){
// 				if (data[key].fillKey !== "MEDIUM"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else if (population === 4){
// 			for (var key in data){
// 				if (data[key].fillKey !== "MEDIUM-HIGH"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else
// 			for (var key in data){
// 				if (data[key].fillKey !== "HIGH"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}

	
=======
		}else
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "HIGH"){
					delete gdpData[key];
				}
			}	
	}

function drawMap(data){
	map = new Datamap({
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
>>>>>>> Stashed changes

// 		var map = new Datamap({
// 			element: document.getElementById('map'),
// 			fills: {
// 				'HIGH': '#7d0000',
// 				'MEDIUM-HIGH': '#a61e1e',
// 				'MEDIUM': '#D95757',
// 				'MEDIUM-LOW': '#FF9C9C',
// 				'LOW': '#FFD6D6',
// 				defaultFill: '#ccc'
// 			},
// 			data
// 		});	

// 		map.legend();
// 	}

// 	function drawGDP(){
// 		data = {};

// 		// also more needs to be done to get this working
// 		for(var i = 0; i < countries.length; i++){
// 			data[countries[i].countryCode] = {fillKey: "defaultFill"};
// 			var thisGDP = countries[i].gdp;
// 			// need to add filter based on routeParams value (gdp)
// 			if (thisGDP < gdpRanges[0].value){
// 				data[countries[i].countryCode] = {fillKey: "LOW"};
// 			}else if(thisGDP < gdpRanges[1].value){
// 				data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
// 			}else if(thisGDP < gdpRanges[2].value){
// 				data[countries[i].countryCode] = {fillKey: "MEDIUM"};
// 			}else if(thisGDP < gdpRanges[3].value){
// 				data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
// 			}else{
// 				data[countries[i].countryCode] = {fillKey: "HIGH"};
// 			}	
// 		}	



// 		if (gdp === 1){
// 			for (var key in data){
// 				if (data[key].fillKey !== "LOW"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else if (gdp === 2){
// 			for (var key in data){
// 				if (data[key].fillKey !== "MEDIUM-LOW"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else if (gdp === 3){
// 			for (var key in data){
// 				if (data[key].fillKey !== "MEDIUM"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else if (gdp === 4){
// 			for (var key in data){
// 				if (data[key].fillKey !== "MEDIUM-HIGH"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}
// 		}else
// 			for (var key in data){
// 				if (data[key].fillKey !== "HIGH"){
// 					data[key].fillKey = {fillKey: "defaultFill"};
// 				}
// 			}	

// 		var map = new Datamap({
// 			element: document.getElementById('map'),
// 			fills: {
// 				'HIGH': '#7d0000',
// 				'MEDIUM-HIGH': '#a61e1e',
// 				'MEDIUM': '#D95757',
// 				'MEDIUM-LOW': '#FF9C9C',
// 				'LOW': '#FFD6D6',
// 				defaultFill: '#ccc'
// 			},
// 			data
// 		});	

// 		map.legend();
// 	}


// });