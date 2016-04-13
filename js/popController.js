interactiveMap.controller('popController', function($scope, $http, $routeParams, $location, mapService){

	console.log("the other");

	var myPopId = $routeParams.popId;

	$scope.countries = countries;

	var popRanges = [
		{
			id: 1,
			label: "less than 1 million",
			value: 1000000
		},
		{
			id: 2,
			label: "1 -- 10 million",
			value: 10000000
		},
		{
			id: 3,
			label: "10 -- 100 million",
			value: 100000000
		},
		{
			id: 4,
			label: "100 million -- 1 billion",
			value: 100000000
		},
		{
			id: 5,
			label: "over 1 billion",
			value: 1000000000
		}];

	data = {};

	// more needs to be done to get this working
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
