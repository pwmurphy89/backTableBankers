interactiveMap.controller('gdpController', function($scope, $http, $routeParams, $location, gdpService){

	console.log("that");

	var gdp = $routeParams.gdp;

	$scope.countries = countries;

	data = {};

	// replace population stuff with gdp stuff
	// also more needs to be done to get this working
	for(var i = 0; i < countries.length; i++){
		data[countries[i].countryCode] = {fillKey: "defaultFill"};
		var myPop = countries[i].totalPop;
		if (myPop < popRanges[0].value){
			data[countries[i].countryCode] = {fillKey: "LOW"};
		}else if(myPop < popRanges[1].value){
			data[countries[i].countryCode] = {fillKey: "MEDIUM-LOW"};
		}else if(myPop < popRanges[2].value){
			data[countries[i].countryCode] = {fillKey: "MEDIUM"};
		}else if(myPop < popRanges[3].value){
			data[countries[i].countryCode] = {fillKey: "MEDIUM-HIGH"};
		}else if(myPop < popRanges[4].value){
			data[countries[i].countryCode] = {fillKey: "HIGH"};
		}    	
	}	

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

	map.updateChoropleth(data);
	
});
