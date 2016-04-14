interactiveMap.controller('mapsController', function($scope, $http, $routeParams, $location){

	var language = $routeParams.option1;
	var option1Type = returnOptionType($routeParams.option1);
	//console.log(option1Type);
	var population = $routeParams.option2;
	console.log(population);
	var option2Type = returnOptionType($routeParams.option2);
	//console.log(option2Type);
	var gdp = $routeParams.option3;
	var option3Type = returnOptionType($routeParams.option3);
	//console.log(option3Type);

	$scope.languages = languages;
	$scope.countries = countries;
	$scope.popRanges = popRanges;
	$scope.gdpRanges = gdpRanges;

	drawLanguage();
	drawPopulation();
	drawGDP();

	if (option1Type !== '' && option2Type !== '' && option3Type !== ''){
		masterData = combine3(langData, popData, gdpData);
		drawMap(masterData);
	}
	else if (option1Type !== '' && option2Type !== ''){
		masterData = combine2(langData, popData);
		drawMap(masterData);
	}
	else if (option1Type !== '' && option3Type !== ''){
		masterData = combine2(langData, gdpData);
		drawMap(masterData);
	}
	else if (option1Type !== ''){
		drawMap(langData);
	}
	else if (option2Type !== ''){
		drawMap(popData);
	}
	else if (option3Type !== ''){
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
		langData = {};	
			// Lists countries with selected language
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
		    	}else if(langPerc>=80){
		    		langData[countries[i].countryCode] = {fillKey: "HIGH"};
		    	}
			}
		}
	}

	function drawPopulation(){
		popData = {};
		for(var i = 0; i < countries.length; i++){
			popData[countries[i].countryCode] = {fillKey: "defaultFill"};
			var myPop = countries[i].totalPop;
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
		console.log(popData);
		if (population === "1"){
			for (var key in popData){
				if (popData[key].fillKey !== "LOW"){
					delete popData[key];
				}
			}
		}else if (population === "2"){
			for (var key in popData){
				if (popData[key].fillKey !== "MEDIUM-LOW"){
					delete popData[key];
				}
			}
		}else if (population === "3"){
			for (var key in popData){
				if (popData[key].fillKey !== "MEDIUM"){
					delete popData[key];
				}
			}
		}else if (population === "4"){
			for (var key in popData){
				if (popData[key].fillKey !== "MEDIUM-HIGH"){
					delete popData[key];
				}
			}
		}else if (population === "5"){
			for (var key in popData){
				if (popData[key].fillKey !== "HIGH"){
					delete popData[key];
				}
			}
		}
		console.log(popData);
	}

	function drawGDP(){
		gdpData = {};
		// also more needs to be done to get this working
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

		if (gdp === "6"){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "LOW"){
					delete gdpData[key];
				}
			}
		}else if (gdp === "7"){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "MEDIUM-LOW"){
					delete gdpData[key];
				}
			}
		}else if (gdp === "8"){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "MEDIUM"){
					delete gdpData[key];
				}
			}
		}else if (gdp === "9"){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "MEDIUM-HIGH"){
					delete gdpData[key];
				}
			}
		}else if (gdp === "10"){
			for (var key in gdpData){
				if (gdpData[key].fillKey !== "HIGH"){
					delete gdpData[key];
				}
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
});