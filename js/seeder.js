var countries = [];
var Country = function(name, totalPop, gdp, languages){
	this.name = name;
	this.totalPop = totalPop;
	this.gdp = gdp;
	this.languages = languages;
}

function addCountries(popdata, gdpdata){
	var popData = popdata[1];
	var gdpData = gdpdata[1];
	for (i=0;i<popData.length;i++){
		var myCountry = popData[i].country.value;
		var myPop = popData[i].value;
		var myGDP = gdpData[i].value;
		var myLanguages = [];
		countries.push(new Country(myCountry, myPop, myGDP, myLanguages));
	}
}

addCountries(myPOPdata1, myGDPdata1);
addCountries(myPOPdata2, myGDPdata2);
addCountries(myPOPdata3, myGDPdata3);
addCountries(myPOPdata4, myGDPdata4);
addCountries(myPOPdata5, myGDPdata5);

/* for (i=0;i<langArray.length;i++){
	var temp = langArray[i].languages;
	for (j=0;j<popData.length;j++){
		if (countries[i].name == )
		countries[ ].languages = temp;
	}
} */

console.log(countries);