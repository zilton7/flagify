// https://www.countries-ofthe-world.com/TLD-list.html

function startGame() {
    assignData(pickAnswerVariants(data));
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

function pickAnswerVariants(obj){
    let correct;
    let variants = [];

    correct = pickFlag(obj);
    correct.correct = 'true';
    variants.push(correct);

    for(let i=0; i < 3;){
        let choice = pickFlag(obj);
        if(choice != correct && !variants.includes(choice)){
            variants.push(pickFlag(obj));
            i++;
        }
    }
    return shuffleArray(variants);
}

function pickFlag(obj){
    let keys = Object.keys(obj);
    let choice = keys[ keys.length * Math.random() << 0]
    return { 'tld': choice, 'name': obj[choice] };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let data = {
    'ad': 'Andorra',
    'ae': 'United Arab Emirates',
    'af': 'Afghanistan',
    'ag': 'Antigua and Barbuda',
    'ai': 'Anguilla (UK)',
    'al': 'Albania',
    'am': 'Armenia',
    'ao': 'Angola',
    'ar': 'Argentina',
    'as': 'American Samoa (USA)',
    'at': 'Austria',
    'au': 'Australia',
    'aw': 'Aruba (Netherlands)',
    'ax': 'Åland Islands (Finland)',
    'az': 'Azerbaijan'
}

console.log(startGame());