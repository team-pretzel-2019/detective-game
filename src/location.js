import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';
import checkCrossword from './games/crossword/check-crossword.js';
import createDiceCanvas from './games/dice-game/create-dice-canvas.js';

const user = loadUser();

const locationHeader = document.getElementById('location');
const gameSection = document.getElementById('game');
const gameOutcome = document.getElementById('game-outcome');

const searchParams = new URLSearchParams(window.location.search);
const locationName = searchParams.get('name');

let currentLocation = {};
for(let i = 0; i < locationList.length; i++) {
    const location = locationList[i];
    if(locationName === location.name) {
        currentLocation = location;
        break;
    }
}

locationHeader.textContent = currentLocation.title;

if(currentLocation.id === 'location1') {
    createDiceCanvas(gameSection, currentLocation, gameOutcome, user);
}
if(currentLocation.id === 'location2') {
    // p for the promtp
    const promptP = document.createElement('p');
    promptP.textContent = 'I need a four letter word for flying that ends in an \'o\'.';
    gameSection.appendChild(promptP);
    // form
    const crosswordForm = document.createElement('form');
        //input
    const guessInput = document.createElement('input');
    guessInput.type = 'text';
    guessInput.name = 'guess';
    guessInput.id = 'guess-input';
    guessInput.placeholder = 'Enter guess here';
    crosswordForm.appendChild(guessInput);
        //submit
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    crosswordForm.appendChild(submitButton);

    gameSection.appendChild(crosswordForm);

    crosswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(crosswordForm);
        const wordGuess = formData.get('guess');
        const result = checkCrossword(wordGuess);
        console.log(result);        

    });
    // wrong guess response

    // game outcome
        // win or lose message
}

saveUser(user);

if(user.receivedClues === 4) {
    window.location = 'end.html';
}
if(user.daysLeft === 0) {
    window.location = 'end.html';
}