interactiveMap.controller('homeMapController', function($scope, $http, $routeParams, $location){
	console.log("homemapscontroller");
	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			defaultFill: '#ccc'
		}
	});
});