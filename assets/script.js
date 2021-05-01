// https://www.countries-ofthe-world.com/TLD-list.html

let correct;
let variants = [];

function startGame() {
    assignData(gatherAnswerVariants(data));
}

// Gather Variants & assign data
function assignData(data){
    document.getElementById('variant-1').innerHTML = data[0].name;
    document.getElementById('variant-2').innerHTML = data[1].name;
    document.getElementById('variant-3').innerHTML = data[2].name;
    document.getElementById('variant-4').innerHTML = data[3].name;

    document.getElementById('flag-image').src = `./assets/flags/${correct.tld}.svg`;

}

function gatherAnswerVariants(obj){
    correct = pickFlag(obj);
    console.log(`correct is: ${ correct.name }`);
    variants.push(correct);

    for(let i=0; i < 3;){
        let choice = pickFlag(obj);
        if(!containsObject(choice, variants)){
            variants.push(choice);
            i++;
        }
    }
    console.log(variants)
    return shuffleArray(variants);
}

function pickFlag(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

// Check and respond
function checkChoice(event){
    if(event.innerHTML == correct.name){
        assignResponse('correct');
        event.classList.add('variant-green')
        nextRound()
    } else {
        assignResponse('false');
        event.classList.add('variant-red')
        nextRound()
    };
}

function resetVariants(){
    document.getElementById('variant-1').className = "variant";
    document.getElementById('variant-2').className = "variant";
    document.getElementById('variant-3').className = "variant";
    document.getElementById('variant-4').className = "variant";
}

function assignResponse(response_type){
    let response_div = document.getElementById('response-div')
    response_div.innerHTML = '';
    if(response_type == 'correct'){
        response_div.innerHTML = "<span class='green'>Correct Answer!</span>"
        response_div.classList.add('green')
    } else {
        response_div.innerHTML = "<span class='red '>Wrong Answer. Try again!</span>"
        response_div.classList.add('red')
    }
}

function resetResponse(){
    let response_div = document.getElementById('response-div');
    response_div.innerHTML = '';
    response_div.innerHTML = "";
    response_div.classList.remove('green');
    response_div.innerHTML = "";
    response_div.classList.remove('red');
}



function nextRound(){
    sleep(500).then(() => {
        startGame();
        resetResponse();
        resetVariants();
        })
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
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  
// Data object
let data = [
    { tld: 'ad', name: 'Andorra' },
    { tld: 'ae', name: 'United Arab Emirates' },
    { tld: 'af', name: 'Afghanistan' },
    { tld: 'ag', name: 'Antigua and Barbuda' },
    { tld: 'ai', name: 'Anguilla (UK)' },
    { tld: 'al', name: 'Albania' },
    { tld: 'am', name: 'Armenia' },
    { tld: 'ao', name: 'Angola' },
    { tld: 'ar', name: 'Argentina' },
    { tld: 'as', name: 'American Samoa (USA)' },
    { tld: 'at', name: 'Austria' },
    { tld: 'au', name: 'Australia' },
    { tld: 'aw', name: 'Aruba (Netherlands)' },
    { tld: 'ax', name: 'Åland Islands (Finland)' },
    { tld: 'az', name: 'Azerbaijan' }
];

console.log(startGame());