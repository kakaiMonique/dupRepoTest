'use strict';


let THEMES = ["house", "plants", "ocean", "dance", "vision",
                "animals", "life", "emotion", "planet", "weather",
                "food", "explore", "micro", "computer", "school"
];
const WORDS = THEMES[Math.floor(Math.random()*THEMES.length)];
const URL = "https://api.datamuse.com/words?ml={theme}";
const proxyURL = "https://cors.io/?";
let promptRecord = [];



// Get API
function getWord() {
    let promise = fetch( proxyURL + URL.replace('{theme}', THEMES[Math.floor(Math.random()*THEMES.length)]))
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            renderPrompts(data); 
        })
    return promise;
}

// Takes in a array of word objects
function renderPrompts(data) {
    let getParent = document.querySelector('.col-prompt');
    if (getParent.childElementCount > 2) {
        document.querySelector('select').remove();
    }

    let newSelect = document.createElement('select');
    newSelect.setAttribute('id', 'promptSelect');
    newSelect.setAttribute('onchange', 'getSelectValue()');

    for(let i = 0; i < data.length; i++) {
        let newOption = document.createElement('option');
        newOption.textContent = data[i].word;
        newOption.setAttribute('value', data[i].word);
        newSelect.append(newOption);
    }
    getParent.append(newSelect);
}

// Updates word options
function getSelectValue() {
    let selectedValue = document.querySelectorAll('select');
    let selectedValue2 = selectedValue[selectedValue.length - 1];
    let value = selectedValue2.options[selectedValue2.selectedIndex].text;
    promptRecord.push(value);
    THEMES = [value];
    if (promptRecord.length < 2) {
        getWord();
    } else {
        document.querySelector('select').remove();
    }
    renderFinal();
}

function renderFinal() {
    let promptParent = document.getElementById('final-prompts');
    if (promptRecord.length < 3) {
        promptParent.textContent += promptRecord[promptRecord.length - 1] + ", ";
    } else {
        promptParent.textContent += promptRecord[promptRecord.length - 1] + " ";
    }
}


let button = document.querySelector('#generate');
button.addEventListener('click', function(){
    document.querySelector('#generate').remove();
    getWord();
})