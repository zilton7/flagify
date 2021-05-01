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
];

console.log(startGame());
