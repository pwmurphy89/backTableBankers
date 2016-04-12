var languages = [ "Mandarin", "Spanish", "English", "Hindi", "Arabic", "Portuguese", "Russian", "Japanese", "French", "Indonesian" ]; 

var countryLangs = [
	{
		name: "China",
		languages: {
			"Mandarin": 100
		}
	},	
	{
		name: "India",
		languages: {
			"Hindi": 100,
			"English": 41
		}
	},	
	{
		name: "United States",
		languages: {
			"English": 90,
			"Spanish": 12,
			"Mandarin": 3,
		}
	},	
	{
		name: "Indonesia",
		languages: {
			"Indonesian": 100,
			"English": 12,
			"Mandarin": 3
		}
	},	
	{
		name: "Brazil",
		languages: {
			"Portuguese": 100,
			"Spanish": 25,
			"English": 30,
			"French": 5
		}
	},	
	{
		name: "Pakistan",
		languages: {
			"Punjabi": 48,
			"Arabic": 10,
			"English": 20,
			"French": 5
		}
	},	
	{
		name: "Nigeria",
		languages: {
			"English": 80,
			"French": 30
		}
	},	
	{
		name: "Bangladesh",
		languages: {
			"Bengali": 100,
			"English": 5
		}
	},	
	{
		name: "Russia",
		languages: {
			"Russian": 100
		}
	},	
	{
		name: "Japan",
		languages: {
			"Japanese": 100,
			"English": 40
		}
	},	
	{
		name: "Mexico",
		languages: {
			"Spanish": 93,
			"English": 20
		}
	},	
	{
		name: "Philippines",
		languages: {
			"Fillpino": 100,
			"English": 20
		}
	},	
	{
		name: "Ethiopia",
		languages: {
			"Oromiffa": 100,
			"English": 10,
			"Arabic": 10
		}
	},	
	{
		name: "Vietnam",
		languages: {
			"Vietnamese": 100,
			"French": 20,
			"English": 20,
			"Mandarin": 10
		}
	},	
	{
		name: "Egypt",
		languages: {
			"Arabic": 80,
			"English": 30,
			"French": 20
		}
	},	
	{
		name: "Iran",
		languages: {
			"Arabic": 70,
			"Persian": 80
		}
	},	
	{
		name: "Germany",
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
		languages: {
			"Turkish": 100,
			"Arabic": 70,
		}
	},	
	{
		name: "Cote d'Ivoire",
		languages: {
			"French": 80,
		}
	},	
	{
		name: "Thailand",
		languages: {
			"Thai": 100,
			"English": 30,
			"French": 10
		}
	},	
	{
		name: "France",
		languages: {
			"French": 100,
			"English": 60,
			"Spanish": 10
		}
	},	
	{
		name: "United Kingdom",
		languages: {
			"English": 100,
			"French": 20
		}
	},	
	{
		name: "Italy",
		languages: {
			"Italian": 100,
			"French": 20,
			"German": 20,
			"English": 20
		}
	},	
	{
		name: "Burma",
		languages: {
			"Burmese": 100
		}
	},	
	{
		name: "South Africa",
		languages: {
			"Afrikaans": 50,
			"English": 70
		}
	},	
	{
		name: "Tanzania",
		languages: {
			"Swahili": 80,
			"English": 60,
			"Arabic": 20
		}
	},	
	{
		name: "South Korea",
		languages: {
			"Korean": 100,
			"English": 50
		}
	},	
	{
		name: "Spain",
		languages: {
			"Spanish": 100,
			"French": 10,
			"English": 40,
			"Portuguese": 10
		}
	},	
	{
		name: "Colombia",
		languages: {
			"Spanish": 100,
			"English": 20
		}
	},	
	{
		name: "Kenya",
		languages: {
			"English": 70,
			"Swahili": 20
		}
	},	
	{
		name: "Ukraine",
		languages: {
			"Ukranian": 90,
			"Russian": 20,
			"English": 20
		}
	},	
	{
		name: "Argentina",
		languages: {
			"Spanish": 100,
			"English": 50,
			"German": 10,
			"French": 10
		}
	},	
	{
		name: "Algeria",
		languages: {
			"Arabic": 100,
			"French": 60
		}
	},	
	{
		name: "Poland",
		languages: {
			"Polish": 100,
			"German": 20,
			"Russian": 30,
			"English": 40
		}
	},	
	{
		name: "Uganda",
		languages: {
			"Swahili": 50,
			"English": 80,
			"Arabic": 20
		}
	},	
	{
		name: "Iraq",
		languages: {
			"Arabic": 80,
			"Kurdish": 20
		}
	},	
	{
		name: "Sudan",
		languages: {
			"Arabic": 80,
			"English": 60
		}
	},	
	{
		name: "Canada",
		languages: {
			"English": 80,
			"French": 22,
			"Hindi": 1
		}
	},	
	{
		name: "Morocco",
		languages: {
			"Arabic": 100,
			"French": 60,
			"Berber": 40
		}
	},	
	{
		name: "Afghanistan",
		languages: {
			"Arabic": 100,
			"Turkish": 20
		}
	},	
	{
		name: "Nepal",
		languages: {
			"Nepali": 50,
			"Arabic": 10,
		}
	},	
	{
		name: "Malaysia",
		languages: {
			"Malay": 90,
			"English": 40,
			"Mandarin": 30,
			"Thai": 10
		}
	},	
	{
		name: "Peru",
		languages: {
			"Spanish": 85
		}
	},	
	{
		name: "Venezuela",
		languages: {
			"Spanish": 100
		}
	},	
	{
		name: "Uzbekistan",
		languages: {
			"Uzbek": 100,
			"Russian": 14
		}
	},	
	{
		name: "Saudi Arabia",
		languages: {
			"Arabic": 100
		}
	},	
	{
		name: "Yemen",
		languages: {
			"Arabic": 100
		}
	},	
	{
		name: "Ghana",
		languages: {
			"English": 40
		}
	},	
	{
		name: "Mozambique",
		languages: {
			"Portuguese": 11,
		}
	},	
	{
		name: "North Korea",
		languages: {
			"Korean": 100
		}
	}
];