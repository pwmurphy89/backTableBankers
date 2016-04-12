var languages = [ "Mandarin", "Spanish", "English", "Hindi", "Arabic", "Portuguese", "Russian", "Japanese", "French", "Indonesian" ]; 

var countryLangs = [
	{
		name: "China",
		countryCode: "CHN",
		languages: {
			"Mandarin": 100
		}
	},	
	{
		name: "India",
		countryCode: "IND",
		languages: {
			"Hindi": 100,
			"English": 41
		}
	},	
	{
		name: "United States",
		countryCode: "USA",
		languages: {
			"English": 90,
			"Spanish": 12,
			"Mandarin": 3,
		}
	},	
	{
		name: "Indonesia",
		countryCode: "IDN",
		languages: {
			"Indonesian": 100,
			"English": 12,
			"Mandarin": 3
		}
	},	
	{
		name: "Brazil",
		countryCode: "BRA",
		languages: {
			"Portuguese": 100,
			"Spanish": 25,
			"English": 30,
			"French": 5
		}
	},	
	{
		name: "Pakistan",
		countryCode: "PAK",
		languages: {
			"Punjabi": 48,
			"Arabic": 10,
			"English": 20,
			"French": 5
		}
	},	
	{
		name: "Nigeria",
		countryCode: "NGA",
		languages: {
			"English": 80,
			"French": 30
		}
	},	
	{
		name: "Bangladesh",
		countryCode: "BGD",
		languages: {
			"Bengali": 100,
			"English": 5
		}
	},	
	{
		name: "Russia",
		countryCode: "RUS",
		languages: {
			"Russian": 100
		}
	},	
	{
		name: "Japan",
		countryCode: "JPN",
		languages: {
			"Japanese": 100,
			"English": 40
		}
	},	
	{
		name: "Mexico",
		countryCode: "MEX",
		languages: {
			"Spanish": 93,
			"English": 20
		}
	},	
	{
		name: "Philippines",
		countryCode: "PHL",
		languages: {
			"Fillpino": 100,
			"English": 20
		}
	},	
	{
		name: "Ethiopia",
		countryCode: "ETH",
		languages: {
			"Oromiffa": 100,
			"English": 10,
			"Arabic": 10
		}
	},	
	{
		name: "Vietnam",
		countryCode: "VNM",
		languages: {
			"Vietnamese": 100,
			"French": 20,
			"English": 20,
			"Mandarin": 10
		}
	},	
	{
		name: "Egypt",
		countryCode: "EGY",
		languages: {
			"Arabic": 80,
			"English": 30,
			"French": 20
		}
	},	
	{
		name: "Iran",
		countryCode: "IRN",
		languages: {
			"Arabic": 70,
			"Persian": 80
		}
	},	
	{
		name: "Germany",
		countryCode: "DEU",
		languages: {
			"German": 100,
			"English": 80,
			"French": 20,
			"Spanish": 10,
			"Russian": 10
		}
	},	
	{
		name: "Turkey",
		countryCode: "TUR",
		languages: {
			"Turkish": 100,
			"Arabic": 70,
		}
	},	
	{
		name: "Cote d'Ivoire",
		countryCode: "CIV",
		languages: {
			"French": 80,
		}
	},	
	{
		name: "Thailand",
		countryCode: "THA",
		languages: {
			"Thai": 100,
			"English": 30,
			"French": 10
		}
	},	
	{
		name: "France",
		countryCode: "FRA",
		languages: {
			"French": 100,
			"English": 60,
			"Spanish": 10
		}
	},	
	{
		name: "United Kingdom",
		countryCode: "GBR",
		languages: {
			"English": 100,
			"French": 20
		}
	},	
	{
		name: "Italy",
		countryCode: "ITA",
		languages: {
			"Italian": 100,
			"French": 20,
			"German": 20,
			"English": 20
		}
	},	
	{
		name: "Myanmar",
		countryCode: "MMR",
		languages: {
			"Burmese": 100
		}
	},	
	{
		name: "South Africa",
		countryCode: "ZAF",
		languages: {
			"Afrikaans": 50,
			"English": 70
		}
	},	
	{
		name: "Tanzania",
		countryCode: "TZA",
		languages: {
			"Swahili": 80,
			"English": 60,
			"Arabic": 20
		}
	},	
	{
		name: "South Korea",
		countryCode: "KOR",
		languages: {
			"Korean": 100,
			"English": 50
		}
	},	
	{
		name: "Spain",
		countryCode: "ESP",
		languages: {
			"Spanish": 100,
			"French": 10,
			"English": 40,
			"Portuguese": 10
		}
	},	
	{
		name: "Colombia",
		countryCode: "COL",
		languages: {
			"Spanish": 100,
			"English": 20
		}
	},	
	{
		name: "Kenya",
		countryCode: "KEN",
		languages: {
			"English": 70,
			"Swahili": 20
		}
	},	
	{
		name: "Ukraine",
		countryCode: "UKR",
		languages: {
			"Ukranian": 90,
			"Russian": 20,
			"English": 20
		}
	},	
	{
		name: "Argentina",
		countryCode: "ARG",
		languages: {
			"Spanish": 100,
			"English": 50,
			"German": 10,
			"French": 10
		}
	},	
	{
		name: "Algeria",
		countryCode: "DZA",
		languages: {
			"Arabic": 100,
			"French": 60
		}
	},	
	{
		name: "Poland",
		countryCode: "POL",
		languages: {
			"Polish": 100,
			"German": 20,
			"Russian": 30,
			"English": 40
		}
	},	
	{
		name: "Uganda",
		countryCode: "UGA",
		languages: {
			"Swahili": 50,
			"English": 80,
			"Arabic": 20
		}
	},	
	{
		name: "Iraq",
		countryCode: "IRQ",
		languages: {
			"Arabic": 80,
			"Kurdish": 20
		}
	},	
	{
		name: "Sudan",
		countryCode: "SDN",
		languages: {
			"Arabic": 80,
			"English": 60
		}
	},	
	{
		name: "Canada",
		countryCode: "CAN",
		languages: {
			"English": 80,
			"French": 22,
			"Hindi": 1
		}
	},	
	{
		name: "Morocco",
		countryCode: "MAR",
		languages: {
			"Arabic": 100,
			"French": 60,
			"Berber": 40
		}
	},	
	{
		name: "Afghanistan",
		countryCode: "AFG",
		languages: {
			"Arabic": 100,
			"Turkish": 20
		}
	},	
	{
		name: "Nepal",
		countryCode: "NPL",
		languages: {
			"Nepali": 50,
			"Arabic": 10,
		}
	},	
	{
		name: "Malaysia",
		countryCode: "MYS",
		languages: {
			"Malay": 90,
			"English": 40,
			"Mandarin": 30,
			"Thai": 10
		}
	},	
	{
		name: "Peru",
		countryCode: "PER",
		languages: {
			"Spanish": 85
		}
	},	
	{
		name: "Venezuela",
		countryCode: "VEN",
		languages: {
			"Spanish": 100
		}
	},	
	{
		name: "Uzbekistan",
		countryCode: "UZB",
		languages: {
			"Uzbek": 100,
			"Russian": 14
		}
	},	
	{
		name: "Saudi Arabia",
		countryCode: "SAU",
		languages: {
			"Arabic": 100
		}
	},	
	{
		name: "Yemen",
		countryCode: "YEM",
		languages: {
			"Arabic": 100
		}
	},	
	{
		name: "Ghana",
		countryCode: "GHA",
		languages: {
			"English": 40
		}
	},	
	{
		name: "Mozambique",
		countryCode: "MOZ",
		languages: {
			"Portuguese": 11,
		}
	},	
	{
		name: "North Korea",
		countryCode: "PRK",
		languages: {
			"Korean": 100
		}
	}
];

for(var i = 0; i < countryLangs.length; i++){
 for(var j = 0; j < countryLangs[i].languages.length; j++){
 	console.log(countryLangs[i].languages[j]);
 }






}