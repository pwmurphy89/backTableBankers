interactiveMap.controller('gdpController', function($scope, $http, $routeParams, $location, mapService){

	console.log("that");

	var gdp = $routeParams.gdpId;

	$scope.countries = countries;

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
		}else if(thisGDP < gdpRanges[4].value){
			data[countries[i].countryCode] = {fillKey: "HIGH"};
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

	//map.updateChoropleth(data);
	map.legend();
	
});
