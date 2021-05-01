// https://www.countries-ofthe-world.com/TLD-list.html

let correct;
let variants = [];

function startGame() {
    assignData(gatherAnswerVariants(data));
}

function assignData(data){
    document.getElementById('variant-1').innerHTML = data[0].name;
    document.getElementById('variant-2').innerHTML = data[1].name;
    document.getElementById('variant-3').innerHTML = data[2].name;
    document.getElementById('variant-4').innerHTML = data[3].name;

    data.forEach(obj => {
        if('correct' in obj){
        document.getElementById('flag-image').src = `./assets/flags/${obj.tld}.svg`;
    }
    })
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