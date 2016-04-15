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

					var languageObject = countries[i].languages;
					var languageText = '';
					for (property in languageObject){
						languageText += property + '(' + languageObject[property] + '%)' + '; ';
					};

					var population = countries[i].totalPop;

					var gdp = '$' + Math.round(countries[i].gdp);

					if (countryName === countries[i].name){
						return '<div class="hoverinfo"><strong>' + countryName + '</strong>' +
						'<p>Languages: ' + languageText + '</p>' +
						'<p>Population: ' + population + '</p>' +
						'<p>GDP: ' + gdp + '</p></div>';
					}
				}			
			}
		}
	});

	window.addEventListener('resize', function() {
        $scope.map.resize();
    });
});