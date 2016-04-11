var countries = [];
var Country = function(name, totalPop, gdp, languages){
	this.name = name;
	this.totalPop = totalPop;
	this.gdp = gdp;
	this.languages = languages;
}

var popData = myPOPdata[1];
var gdpData = myGDPdata[1];
for (i=0;i<popData.length;i++){
	var myCountry = popData[i].country.value;
	var myPop = popData[i].value;
	var myGDP = gdpData[i].value;
	var myLanguages = [];
	countries.push(new Country(myCountry, myPop, myGDP, myLanguages));
}
console.log(countries);

/* for (i=0;i<langArray.length;i++){
	var temp = langArray[i].languages;
	for (j=0;j<popData.length;j++){
		if (countries[i].name == )
		countries[ ].languages = temp;
	}
} */