let correct;
let variants = [];
let round = 0;
let correct_count = 0;
let wrong_count = 0;

function startGame() {
  round++;
  variants = [];
  assignRound();
  assignData(gatherAnswerVariants(data));
}

function assignRound() {
  document.getElementById("round-count").innerHTML = `Round ${round}`;
  document.getElementById(
    "correct-count"
  ).innerHTML = `Correct: ${correct_count}`;
  document.getElementById("wrong-count").innerHTML = `Wrong: ${wrong_count}`;
}

// Gather Variants & assign data
function assignData(data) {
  document.getElementById("variant-1").innerHTML = data[0].name;
  document.getElementById("variant-2").innerHTML = data[1].name;
  document.getElementById("variant-3").innerHTML = data[2].name;
  document.getElementById("variant-4").innerHTML = data[3].name;

  document.getElementById(
    "flag-image"
  ).src = `./assets/flags/${correct.tld}.svg`;
}

function gatherAnswerVariants(obj) {
  correct = pickFlag(obj);
  console.log(`correct is: ${correct.name}`);
  variants.push(correct);

  for (let i = 0; i < 3; ) {
    let choice = pickFlag(obj);
    if (!containsObject(choice, variants)) {
      variants.push(choice);
      i++;
    }
  }
  console.log(variants);
  return shuffleArray(variants);
}

function pickFlag(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Check and respond
function checkChoice(event) {
  if (event.innerHTML == correct.name) {
    assignResponse("correct");
    event.classList.add("variant-green");
    correct_count++;
    nextRound();
  } else {
    assignResponse("false");
    event.classList.add("variant-red");
    wrong_count++;
    nextRound();
  }
}

function resetVariants() {
  document.getElementById("variant-1").className = "variant";
  document.getElementById("variant-2").className = "variant";
  document.getElementById("variant-3").className = "variant";
  document.getElementById("variant-4").className = "variant";
}

function assignResponse(response_type) {
  let response_div = document.getElementById("response-div");
  response_div.innerHTML = "";
  if (response_type == "correct") {
    response_div.innerHTML = "<span class='green'>Correct Answer!</span>";
    response_div.classList.add("green");
  } else {
    response_div.innerHTML =
      "<span class='red '>Wrong Answer. Try again!</span>";
    response_div.classList.add("red");
  }
}

function resetResponse() {
  let response_div = document.getElementById("response-div");
  response_div.innerHTML = "";
  response_div.innerHTML = "";
  response_div.classList.remove("green");
  response_div.innerHTML = "";
  response_div.classList.remove("red");
}

function nextRound() {
  sleep(500).then(() => {
    resetResponse();
    resetVariants();
    startGame();
  });
}

// Miscellaneous
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function containsObject(obj, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
}

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// https://www.countries-ofthe-world.com/TLD-list.html
// Data object
let data = [
  { tld: "ad", name: "Andorra" },
  { tld: "ae", name: "United Arab Emirates" },
  { tld: "af", name: "Afghanistan" },
  { tld: "ag", name: "Antigua and Barbuda" },
  { tld: "ai", name: "Anguilla (UK)" },
  { tld: "al", name: "Albania" },
  { tld: "am", name: "Armenia" },
  { tld: "ao", name: "Angola" },
  { tld: "ar", name: "Argentina" },
  { tld: "as", name: "American Samoa (USA)" },
  { tld: "at", name: "Austria" },
  { tld: "au", name: "Australia" },
  { tld: "aw", name: "Aruba (Netherlands)" },
  { tld: "ax", name: "Åland Islands (Finland)" },
  { tld: "az", name: "Azerbaijan" },
  { tld: "ba", name: "Bosnia and Herzegovina" },
  { tld: "bb", name: "Barbados" },
  { tld: "bd", name: "Bangladesh" },
  { tld: "be", name: "Belgium" },
  { tld: "bf", name: "Burkina Faso" },
  { tld: "bg", name: "Bulgaria" },
  { tld: "bh", name: "Bahrain" },
  { tld: "bi", name: "Burundi" },
  { tld: "bj", name: "Benin" },
  { tld: "bm", name: "Bermuda (UK)" },
  { tld: "bn", name: "Brunei" },
  { tld: "bo", name: "Bolivia" },
  { tld: "br", name: "Brazil" },
  { tld: "bs", name: "Bahamas" },
  { tld: "bt", name: "Bhutan" },
  { tld: "bv", name: "Bouvet Island (Norway)" },
  { tld: "bw", name: "Botswana" },
  { tld: "by", name: "Belarus" },
  { tld: "bz", name: "Belize" },
  { tld: "ca", name: "Canada" },
  { tld: "cc", name: "Cocos (Keeling) Islands (Australia)" },
  { tld: "cd", name: "Democratic Republic of the Congo" },
  { tld: "cf", name: "Central African Republic" },
  { tld: "cg", name: "Republic of the Congo" },
  { tld: "ch", name: "Switzerland" },
  { tld: "ci", name: "Cote d'Ivoire" },
  { tld: "ck", name: "Cook Islands (New Zealand)" },
  { tld: "cl", name: "Chile" },
  { tld: "cm", name: "Cameroon" },
  { tld: "cn", name: "China" },
  { tld: "co", name: "Colombia" },
  { tld: "cr", name: "Costa Rica" },
  { tld: "cu", name: "Cuba" },
  { tld: "cv", name: "Cabo Verde" },
  { tld: "cw", name: "Curacao (Netherlands)" },
  { tld: "cx", name: "Christmas Island (Australia)" },
  { tld: "cy", name: "Cyprus" },
  { tld: "cz", name: "Czechia" },
  { tld: "de", name: "Germany" },
  { tld: "dj", name: "Djibouti" },
  { tld: "dk", name: "Denmark" },
  { tld: "dm", name: "Dominica" },
  { tld: "do", name: "Dominican Republic" },
  { tld: "dz", name: "Algeria" },
  { tld: "ec", name: "Ecuador" },
  { tld: "ee", name: "Estonia" },
  { tld: "eg", name: "Egypt" },
  { tld: "er", name: "Eritrea" },
  { tld: "es", name: "Spain" },
  { tld: "et", name: "Ethiopia" },
  { tld: "fi", name: "Finland" },
  { tld: "fj", name: "Fiji" },
  { tld: "fk", name: "Falkland Islands (UK)" },
  { tld: "fm", name: "Federated States of Micronesia" },
  { tld: "fo", name: "Faroe Islands (Denmark)" },
  { tld: "fr", name: "France" },
  { tld: "ga", name: "Gabon" },
  { tld: "gb", name: "United Kingdom" },
  { tld: "gd", name: "Grenada" },
  { tld: "ge", name: "Georgia" },
  { tld: "gf", name: "French Guiana (France)" },
  { tld: "gg", name: "Guernsey (UK)" },
  { tld: "gh", name: "Ghana" },
  { tld: "gi", name: "Gibraltar (UK)" },
  { tld: "gl", name: "Greenland (Denmark)" },
  { tld: "gm", name: "Gambia" },
  { tld: "gn", name: "Guinea" },
  { tld: "gp", name: "Guadeloupe (France)" },
  { tld: "gq", name: "Equatorial Guinea" },
  { tld: "gr", name: "Greece" },
  { tld: "gs", name: "South Georgia and the South Sandwich Islands (UK)" },
  { tld: "gt", name: "Guatemala" },
  { tld: "gu", name: "Guam (USA)" },
  { tld: "gw", name: "Guinea-Bissau" },
  { tld: "gy", name: "Guyana" },
  { tld: "hk", name: "Hong Kong (China)" },
  { tld: "hm", name: "Heard Island and McDonald Islands (Australia)" },
  { tld: "hn", name: "Honduras" },
  { tld: "hr", name: "Croatia" },
  { tld: "ht", name: "Haiti" },
  { tld: "hu", name: "Hungary" },
  { tld: "id", name: "Indonesia" },
  { tld: "ie", name: "Ireland" },
  { tld: "il", name: "Israel" },
  { tld: "im", name: "Isle of Man (UK)" },
  { tld: "in", name: "India" },
  { tld: "io", name: "British Indian Ocean Territory (UK)" },
  { tld: "iq", name: "Iraq" },
  { tld: "ir", name: "Iran" },
  { tld: "is", name: "Iceland" },
  { tld: "it", name: "Italy" },
  { tld: "je", name: "Jersey (UK)" },
  { tld: "jm", name: "Jamaica" },
  { tld: "jo", name: "Jordan" },
  { tld: "jp", name: "Japan" },
  { tld: "ke", name: "Kenya" },
  { tld: "kg", name: "Kyrgyzstan" },
  { tld: "kh", name: "Cambodia" },
  { tld: "ki", name: "Kiribati" },
  { tld: "km", name: "Comoros" },
  { tld: "kn", name: "Saint Kitts and Nevis" },
  { tld: "kp", name: "North Korea" },
  { tld: "kr", name: "South Korea" },
  { tld: "kw", name: "Kuwait" },
  { tld: "ky", name: "Cayman Islands (UK)" },
  { tld: "kz", name: "Kazakhstan" },
{ tld: "la", name:	"Laos" },
{ tld: "lb", name:	"Lebanon" },
{ tld: "lc", name:	"Saint Lucia" },
{ tld: "li", name:	"Liechtenstein" },
{ tld: "lk", name:	"Sri Lanka" },
{ tld: "lr", name:	"Liberia" },
{ tld: "ls", name:	"Lesotho" },
{ tld: "lt", name:	"Lithuania" },
{ tld: "lu", name:	"Luxembourg" },
{ tld: "lv", name:	"Latvia" },
{ tld: "ly", name:	"Libya" },
{ tld: "ma", name:	"Morocco" },
{ tld: "mc", name:	"Monaco" },
{ tld: "md", name:	"Moldova },
{ tld: "me", name:	"Montenegro" },
{ tld: "mg", name:	"Madagascar" },
{ tld: "mh", name:	"Marshall Islands" },
{ tld: "mk", name:	"North Macedonia (formerly Macedonia)" },
{ tld: "ml", name:	"Mali" },
{ tld: "mm", name:	"Myanmar (formerly Burma)" },
{ tld: "mn", name:	"Mongolia" },
{ tld: "mo", name:	"Macau (China)" },
{ tld: "mp", name:	"Northern Mariana Islands (USA)" },
{ tld: "mq", name:	"Martinique (France)" },
{ tld: "mr", name:	"Mauritania" },
{ tld: "ms", name:	"Montserrat (UK)" },
{ tld: "mt", name:	"Malta" },
{ tld: "mu", name:	"Mauritius" },
{ tld: "mv", name:	"Maldives" },
{ tld: "mw", name:	"Malawi" },
{ tld: "mx", name:	"Mexico" },
{ tld: "my", name:	"Malaysia" },
{ tld: "mz", name:	"Mozambique" },
{ tld: "na", name:	"Namibia" },
{ tld: "nc", name:	"New Caledonia (France)" },
{ tld: "ne", name:	"Niger" },
{ tld: "nf", name:	"Norfolk Island (Australia)" },
{ tld: "ng", name:	"Nigeria" },
{ tld: "ni", name:	"Nicaragua" },
{ tld: "nl", name:	"Netherlands" },
{ tld: "no", name:	"Norway" },
{ tld: "np", name:	"Nepal" },
{ tld: "nr", name:	"Nauru" },
{ tld: "nu", name:	"Niue (New Zealand)" },
{ tld: "nz", name:	"New Zealand" },
{ tld: "om", name:	"Oman" },
{ tld: "pa", name:	"Panama" },
{ tld: "pe", name:	"Peru" },
{ tld: "pf", name:	"French Polynesia (France)" },
{ tld: "pg", name:	"Papua New Guinea" },
{ tld: "ph", name:	"Philippines" },
{ tld: "pk", name:	"Pakistan" },
{ tld: "pl", name:	"Poland" },
{ tld: "pm", name:	"Saint Pierre and Miquelon (France)" },
{ tld: "pn", name:	"Pitcairn Islands (UK)" },
{ tld: "pr", name:	"Puerto Rico (USA)" },
{ tld: "ps", name:	"Palestine" },
{ tld: "pt", name:	"Portugal" },
{ tld: "pw", name:	"Palau" },
{ tld: "py", name:	"Paraguay" },
{ tld: "qa", name:	"Qatar" },
{ tld: "re", name:	"Reunion (France)" },
{ tld: "ro", name:	"Romania" },
{ tld: "rs", name:	"Serbia" },
{ tld: "ru", name:	"Russia" },
{ tld: "rw", name:	"Rwanda" },
{ tld: "sa", name:	"Saudi Arabia" },
{ tld: "sb", name:	"Solomon Islands" },
{ tld: "sc", name:	"Seychelles" },
{ tld: "sd", name:	"Sudan" },
{ tld: "se", name:	"Sweden" },
{ tld: "sg", name:	"Singapore" },
{ tld: "sh", name:	"Saint Helena (UK)" },
{ tld: "si", name:	"Slovenia" },
{ tld: "sj", name:	"Svalbard and Jan Mayen (Norway)" },
{ tld: "sk", name:	"Slovakia" },
{ tld: "sl", name:	"Sierra Leone" },
{ tld: "sm", name:	"San Marino" },
{ tld: "sn", name:	"Senegal" },
{ tld: "so", name:	"Somalia" },
{ tld: "sr", name:	"Suriname" },
{ tld: "st", name:	"Sao Tome and Principe" },
{ tld: "sv", name:	"El Salvador" },
{ tld: "sx", name:	"Sint Maarten (Netherlands)" },
{ tld: "sy", name:	"Syria" },
{ tld: "sz", name:	"Eswatini (formerly Swaziland)" },
{ tld: "tc", name:	"Turks and Caicos Islands (UK)" },
{ tld: "td", name:	"Chad" },
{ tld: "tf", name:	"French Southern Territories (France)" },
{ tld: "tg", name:	"Togo" },
{ tld: "th", name:	"Thailand" },
{ tld: "tj", name:	"Tajikistan" },
{ tld: "tk", name:	"Tokelau (New Zealand)" },
{ tld: "tl", name:	"Timor-Leste" },
{ tld: "tm", name:	"Turkmenistan" },
{ tld: "tn", name:	"Tunisia" },
{ tld: "to", name:	"Tonga" },
{ tld: "tr", name:	"Turkey" },
{ tld: "tt", name:	"Trinidad and Tobago" },
{ tld: "tv", name:	"Tuvalu" },
{ tld: "tw", name:	"Taiwan" },
{ tld: "tz", name:	"Tanzania" },
{ tld: "ua", name:	"Ukraine" },
{ tld: "ug", name:	"Uganda" },
{ tld: "uk", name:	"United Kingdom" },
{ tld: "us", name:	"United States of America" },
{ tld: "uy", name:	"Uruguay" },
{ tld: "uz", name:	"Uzbekistan" },
{ tld: "va", name:	"Vatican City (Holy See)" },
{ tld: "vc", name:	"Saint Vincent and the Grenadines" },
{ tld: "ve", name:	"Venezuela" },
{ tld: "vg", name:	"British Virgin Islands (UK)" },
{ tld: "vi", name:	"US Virgin Islands (USA)" },
{ tld: "vn", name:	"Vietnam" },
{ tld: "vu", name:	"Vanuatu" },
{ tld: "wf", name:	"Wallis and Futuna (France)" },
{ tld: "ws", name:	"Samoa" },
{ tld: "ye", name:	"Yemen" },
{ tld: "yt", name:	"Mayotte (France)" },
{ tld: "za", name:	"South Africa" },
{ tld: "zm", name:	"Zambia" },
{ tld: "zw", name:	"Zimbabwe" }
];

startGame();
