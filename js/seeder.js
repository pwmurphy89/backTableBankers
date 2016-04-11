var countries = [];
var Country = function(name, totalPop, gdp){
	this.name = name;
	this.totalPop = totalPop;
	this.gdp = gdp;
	//this.languages = languages;
}

var popData = myPOPdata[1];
var gdpData = myGDPdata[1];
for (i=0;i<popData.length;i++){
	var myCountry = popData[i].country.value;
	var myPop = popData[i].value;
	var myGDP = gdpData[i].value;
	countries.push(new Country(myCountry, myPop, myGDP));
}
console.log(countries);