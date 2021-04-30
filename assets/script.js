// https://www.countries-ofthe-world.com/TLD-list.html

function startGame() {
    return pickAnswerVariants(data);
}

function pickAnswerVariants(obj){
    let correct;
    let variants = [];

    correct = pickFlag(obj);
    correct.correct = 'true';
    variants.push(correct);

    for(let i=0; i < 3;){
        let choice = pickFlag(obj);
        if(choice != correct){
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