interactiveMap.controller('homeMapController', function($scope, $http, $routeParams, $location, languageService){

	console.log("this");

	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			defaultFill: '#ccc'
		}
	});
});