interactiveMap.controller('homeMapController', function($scope, $http, $routeParams, $location){

	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			defaultFill: '#ccc'
		}
	});
});