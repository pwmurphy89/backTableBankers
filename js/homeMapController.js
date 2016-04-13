interactiveMap.controller('homeMapController', function($scope, $http, $routeParams, $location, mapService){

	console.log("this");

	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			defaultFill: '#ccc'
		}
	});
});