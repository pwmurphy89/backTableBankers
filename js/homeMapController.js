interactiveMap.controller('homeMapController', function($scope, $http, $routeParams, $location){

	$scope.map = new Datamap({
		element: document.getElementById('map'),
		fills: {
			defaultFill: '#ccc'
		},
		responsive: true,
		geographyConfig: {
			popupTemplate: function(geo) {
				var countryName = geo.properties.name;
				for(i=0;i<countries.length;i++){
					if (countryName === countries[i].name){
						return '<div class="hoverinfo"><strong>' + countryName + '</strong>' +
						'<p>Languages: ' + countries[i].languages + '</p>' +
						'<p>Population: ' + countries[i].totalPop + '</p>' +
						'<p>GDP: ' + countries[i].gdp + '</p></div>';
					}
				}			
			}
		}
	});

	window.addEventListener('resize', function() {
        $scope.map.resize();
    });
});