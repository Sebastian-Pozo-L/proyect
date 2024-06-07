// IMPORTS

/*
=============================
    		HOME
============================= 
*/
const homeclick = document.querySelector("#home");

function homeEvent() {
	console.log("first");
}

homeclick.addEventListener("click", homeEvent);

/*
=============================
    	CASE DETAILS
============================= 
*/

const casedetailsclick = document.querySelector("#casedetails");

async function handleClick(event) {
	event.preventDefault();
	await caseDEraseEvent();
	await caseDEvent();
	await createVisualData();
	casedetailsclick.removeEventListener("click", handleClick);
}

async function caseDEraseEvent() {
	const boxElement = document.getElementById("box-present");
	const boxopcElement = document.getElementById("box-opc");

	if (boxElement) {
		Array.from(boxElement.children).forEach((child) => {
			child.remove();
		});
		boxElement.className = "datainf";
	}

	if (boxopcElement) {
		boxopcElement.remove();
	}
}

function caseDEvent() {
	const datasearch = document.getElementById("box-present");
	if (!datasearch) {
		console.error("Data search container not found.");
		return;
	}
	const navdata = document.createElement("div");
	navdata.className = "nav-data";
	const inputname = createInputName();
	const nationalitySelect = createNationalitySelect();
	const sexSelect = createSexSelect();
	const submitButton = createSubmitButton();
	navdata.appendChild(inputname);
	navdata.appendChild(nationalitySelect);
	navdata.appendChild(sexSelect);
	navdata.appendChild(submitButton);
	datasearch.appendChild(navdata);
}

function createInputName() {
	const inputname = document.createElement("input");
	inputname.setAttribute("type", "name");
	inputname.setAttribute("id", "name");
	inputname.setAttribute("required", "");
	inputname.setAttribute("placeholder", "Username");
	inputname.classList.add("inputname");
	return inputname;
}

function createNationalitySelect() {
	const countryNames = {
		AF: "Afghanistan",
		AL: "Albania",
		DZ: "Algeria",
		AS: "American Samoa, United States",
		AD: "Andorra",
		AO: "Angola",
		AI: "Anguilla, United Kingdom",
		AG: "Antigua and Barbuda",
		AR: "Argentina",
		AM: "Armenia",
		AW: "Aruba",
		AU: "Australia",
		AT: "Austria",
		AZ: "Azerbaijan",
		BS: "Bahamas",
		BH: "Bahrain",
		BD: "Bangladesh",
		BB: "Barbados",
		BY: "Belarus",
		BE: "Belgium",
		BZ: "Belize",
		BJ: "Benin",
		BM: "Bermuda, United Kingdom",
		BT: "Bhutan",
		BO: "Bolivia",
		BQ: "Bonaire, Netherlands",
		BA: "Bosnia and Herzegovina",
		BW: "Botswana",
		BR: "Brazil",
		VG: "British Virgin Islands, United Kingdom",
		BN: "Brunei",
		BG: "Bulgaria",
		BF: "Burkina Faso",
		BI: "Burundi",
		CV: "Cabo Verde",
		KH: "Cambodia",
		CM: "Cameroon",
		CA: "Canada",
		KY: "Cayman Islands, United Kingdom",
		CF: "Central African Republic",
		TD: "Chad",
		CL: "Chile",
		CN: "China",
		CO: "Colombia",
		KM: "Comoros",
		CG: "Congo",
		CD: "Congo (Democratic Republic of)",
		CR: "Costa Rica",
		HR: "Croatia",
		CU: "Cuba",
		CW: "Curaçao",
		CY: "Cyprus",
		CZ: "Czech Republic",
		CI: "Côte d'Ivoire",
		DK: "Denmark",
		DJ: "Djibouti",
		DM: "Dominica",
		DO: "Dominican Republic",
		EC: "Ecuador",
		EG: "Egypt",
		SV: "El Salvador",
		GQ: "Equatorial Guinea",
		ER: "Eritrea",
		EE: "Estonia",
		SZ: "Eswatini",
		ET: "Ethiopia",
		FM: "Federated States of Micronesia",
		FJ: "Fiji",
		FI: "Finland",
		FR: "France",
		GA: "Gabon",
		GM: "Gambia",
		GE: "Georgia",
		DE: "Germany",
		GH: "Ghana",
		GI: "Gibraltar, United Kingdom",
		GR: "Greece",
		GD: "Grenada",
		GT: "Guatemala",
		GN: "Guinea",
		GW: "Guinea Bissau",
		GY: "Guyana",
		HT: "Haiti",
		HN: "Honduras",
		HK: "Hong Kong, China",
		HU: "Hungary",
		IS: "Iceland",
		IN: "India",
		ID: "Indonesia",
		IR: "Iran",
		IQ: "Iraq",
		IE: "Ireland",
		IL: "Israel",
		IT: "Italy",
		JM: "Jamaica",
		JP: "Japan",
		JO: "Jordan",
		KZ: "Kazakhstan",
		KE: "Kenya",
		KI: "Kiribati",
		KP: "Korea (Democratic People's Republic of)",
		KR: "Korea (Republic of)",
		KW: "Kuwait",
		KG: "Kyrgyzstan",
		LA: "Laos",
		LV: "Latvia",
		LB: "Lebanon",
		LS: "Lesotho",
		LR: "Liberia",
		LY: "Libya",
		LI: "Liechtenstein",
		LT: "Lithuania",
		LU: "Luxembourg",
		MO: "Macao, China",
		MG: "Madagascar",
		MW: "Malawi",
		MY: "Malaysia",
		MV: "Maldives",
		ML: "Mali",
		MT: "Malta",
		MH: "Marshall Islands",
		MR: "Mauritania",
		MU: "Mauritius",
		MX: "Mexico",
		MD: "Moldova",
		MC: "Monaco",
		MN: "Mongolia",
		ME: "Montenegro",
		MS: "Montserrat, United Kingdom",
		MA: "Morocco",
		MZ: "Mozambique",
		MM: "Myanmar",
		NA: "Namibia",
		NR: "Nauru",
		NP: "Nepal",
		NL: "Netherlands",
		NZ: "New Zealand",
		NI: "Nicaragua",
		NE: "Niger",
		NG: "Nigeria",
		MK: "North Macedonia",
		NO: "Norway",
		OM: "Oman",
		PK: "Pakistan",
		PW: "Palau",
		PS: "Palestine, State of",
		PA: "Panama",
		PG: "Papua New Guinea",
		PY: "Paraguay",
		PE: "Peru",
		PH: "Philippines",
		PL: "Poland",
		PT: "Portugal",
		PR: "Puerto Rico, United States",
		QA: "Qatar",
		RO: "Romania",
		RU: "Russia",
		RW: "Rwanda",
		KN: "Saint Kitts and Nevis",
		LC: "Saint Lucia",
		VC: "Saint Vincent and the Grenadines",
		WS: "Samoa",
		SM: "San Marino",
		ST: "Sao Tome and Principe",
		SA: "Saudi Arabia",
		SN: "Senegal",
		RS: "Serbia",
		SC: "Seychelles",
		SL: "Sierra Leone",
		SG: "Singapore",
		SX: "Sint Maarten",
		SK: "Slovakia",
		SI: "Slovenia",
		SB: "Solomon Islands",
		SO: "Somalia",
		ZA: "South Africa",
		SS: "South Sudan",
		ES: "Spain",
		LK: "Sri Lanka",
		SD: "Sudan",
		SR: "Suriname",
		SE: "Sweden",
		CH: "Switzerland",
		SY: "Syria",
		TW: "Taiwan, China",
		TJ: "Tajikistan",
		TZ: "Tanzania",
		TH: "Thailand",
		TL: "Timor-Leste",
		TG: "Togo",
		TO: "Tonga",
		TT: "Trinidad and Tobago",
		TN: "Tunisia",
		TM: "Turkmenistan",
		TC: "Turks and Caicos (Islands), United Kingdom",
		TV: "Tuvalu",
		TR: "Turkey",
		UG: "Uganda",
		UA: "Ukraine",
		AE: "United Arab Emirates",
		GB: "United Kingdom",
		US: "United States",
		UY: "Uruguay",
		UZ: "Uzbekistan",
		VU: "Vanuatu",
		VA: "Vatican City State",
		VE: "Venezuela",
		VN: "Viet Nam",
		YE: "Yemen",
		ZM: "Zambia",
		ZW: "Zimbabwe",
		AT: "European Union",
		BE: "European Union",
		BG: "European Union",
		CY: "European Union",
		DE: "European Union",
		DK: "European Union",
		EE: "European Union",
		ES: "European Union",
		FI: "European Union",
		FR: "European Union",
		GR: "European Union",
		HR: "European Union",
		HU: "European Union",
		IE: "European Union",
		IT: "European Union",
		LT: "European Union",
		LU: "European Union",
		LV: "European Union",
		MT: "European Union",
		NL: "European Union",
		914: "ICC (International Criminal Court)",
		916: "STL (Special Tribunal for Lebanon)",
		922: "UN IRMCT (United Nations International Residual Mechanism for Criminal Tribunals)",
		UNK: "under UNMIK mandate (Kosovo)",
	};

	const selectNacion = document.createElement("select");
	selectNacion.classList.add("nationality");
	selectNacion.setAttribute("id", "nationality");
	selectNacion.setAttribute("required", "");

	const placeholderNopt = document.createElement("option");
	placeholderNopt.value = "";
	placeholderNopt.textContent = "Select a country";
	placeholderNopt.disabled = true;
	placeholderNopt.selected = true;
	selectNacion.appendChild(placeholderNopt);

	const uniqueCountries = new Set(Object.values(countryNames));
	uniqueCountries.forEach((country) => {
		const option = document.createElement("option");
		option.value = country;
		option.text = country;
		selectNacion.appendChild(option);
	});

	return selectNacion;
}

function createSexSelect() {
	const sexGenere = {
		M: "Male",
		F: "Female",
		U: "Unknown",
	};
	const selectSEX = document.createElement("select");
	selectSEX.classList.add("sex-id");
	selectSEX.setAttribute("id", "sexgenre");
	selectSEX.setAttribute("required", "");

	const placeholderOpt = document.createElement("option");
	placeholderOpt.value = "";
	placeholderOpt.textContent = "Select a gender";
	placeholderOpt.disabled = true;
	placeholderOpt.selected = true;
	selectSEX.appendChild(placeholderOpt);

	for (const deco in sexGenere) {
		const opt = document.createElement("option");
		opt.value = deco;
		opt.textContent = sexGenere[deco];
		selectSEX.appendChild(opt);
	}
	return selectSEX;
}

function createSubmitButton() {
	const buttondataS = document.createElement("button");
	buttondataS.classList.add("buttondata");
	buttondataS.setAttribute("type", "button");
	buttondataS.addEventListener("click", searchData);
	buttondataS.textContent = "Search";
	return buttondataS;
}

async function createVisualData() {
	const dataresult = document.getElementById("box-present");
	if (!dataresult) {
		console.error("Data search container not found.");
		return;
	}
	const contentdata = document.createElement("div");
	contentdata.className = "content-data";
	contentdata.id = "results";
	dataresult.appendChild(contentdata);
}

async function fetchImageLinks(notice) {
	const imageLinksUrl = notice._links.images.href;
	try {
		const response = await fetch(imageLinksUrl);
		const data = await response.json();
		if (data && data._embedded && data._embedded.images.length > 0) {
			return data._embedded.images[0]._links.self.href;
		}
	} catch (error) {
		console.error("Error fetching image links: ", error);
	}
	return null;
}

async function searchData() {
	const nameElement = document.getElementById("name");
	const nationalityElement = document.getElementById("nationality");
	const sexElement = document.getElementById("sexgenre");
	const name = nameElement.value;
	const nationality = nationalityElement.value;
	const sex = sexElement.value;
	// Construcción de la url
	let url = "https://ws-public.interpol.int/notices/v1/red?";
	if (name) url += `name=${encodeURIComponent(name)}&`;
	if (nationality) url += `nationality=${encodeURIComponent(nationality)}&`;
	if (sex) url += `sexId=${encodeURIComponent(sex)}&`;
	url = url.slice(0, -1);
	try {
		const response = await fetch(url);
		const data = await response.json();
		await displayResults(data);
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
}
async function displayResults(data) {
	const resultsContainer = document.getElementById("results");
	resultsContainer.innerHTML = ""; //Limpia resultados anteriores
	if (!data || !Array.isArray(data._embedded.notices) || data._embedded.notices.length === 0) {
		resultsContainer.innerHTML = "<p>No results found</p>";
		return;
	}
	const list = document.createElement("ul");
	for (const item of data._embedded.notices) {
		const listItem = document.createElement("li");
		const imageUrl = await fetchImageLinks(item);
		listItem.innerHTML = `${imageUrl ? `<img src="${imageUrl}" alt="Full Image">` : ""}
            <br>
		${item.name} - ${item.nationalities.join(", ")} - ${item.date_of_birth}`;
		list.appendChild(listItem);
	}
	resultsContainer.appendChild(list);
}
casedetailsclick.addEventListener("click", handleClick);

/*
=============================
    	DATA ANALYSIS
============================= 
*/

const datalysisclick = document.querySelector("#datalysis");

function dataAEvent() {
	console.log("three");
}

datalysisclick.addEventListener("click", dataAEvent);

/*
=============================
    	ANNOUNCEMENTS
============================= 
*/

const announcementsclick = document.querySelector("#announcements");

function announEvent() {
	console.log("four");
}

announcementsclick.addEventListener("click", announEvent);

/*
=============================
    	MY ACCOUNT
============================= 
*/

const myaccountclick = document.querySelector("#myaccount");

function myAEvent() {
	console.log("five");
}

myaccountclick.addEventListener("click", myAEvent);
