interactiveMap.controller('popController', function($scope, $http, $routeParams, $location, popService){

	console.log("the other");

	var popRange = $routeParams.population;

	$scope.countries = countries;

	data = {};

	// more needs to be done to get this working
	for(var i = 0; i < countries.length; i++){
		data[countries[i].countryCode] = {fillKey: "defaultFill"};
		var myPop = countries[i].totalPop;
		// need to add filter based on routeParams value (popRange)
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
