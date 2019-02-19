import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';
import createDiceCanvas from './games/dice-game/create-dice-canvas.js';
import createCrosswordCanvas from './games/crossword/create-crossword-canvas.js';
import checkLock from './games/lock-door/check-lock.js';

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
    createCrosswordCanvas(gameSection, currentLocation, gameOutcome, user);
}

if(currentLocation.id === 'location3') {
    // in GAME SECTION
    // create prompt p
    const gamePromptP = document.createElement('p');
    gamePromptP.textContent = 'Enter the code to unlock the door:';
    gameSection.appendChild(gamePromptP);
    // create form 
    const codeForm = document.createElement('form');

        // input numbers - 4
    const guessOne = document.createElement('input');
    guessOne.type = 'number';
    guessOne.name = 'guess-one';
    guessOne.min = '0';
    guessOne.max = '9';
    guessOne.value = '0';
    codeForm.appendChild(guessOne);

    const guessTwo = document.createElement('input');
    guessTwo.type = 'number';
    guessTwo.name = 'guess-two';
    guessTwo.min = '0';
    guessTwo.max = '9';
    guessTwo.value = '0';
    codeForm.appendChild(guessTwo);

    const guessThree = document.createElement('input');
    guessThree.type = 'number';
    guessThree.name = 'guess-three';
    guessThree.min = '0';
    guessThree.max = '9';
    guessThree.value = '0';
    codeForm.appendChild(guessThree);

    const guessFour = document.createElement('input');
    guessFour.type = 'number';
    guessFour.name = 'guess-four';
    guessFour.min = '0';
    guessFour.max = '9';
    guessFour.value = '0';
    codeForm.appendChild(guessFour);

    //submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'SUBMIT';
    codeForm.appendChild(submitButton);

    gameSection.appendChild(codeForm);

    const wrongGuessP = document.createElement('p');
    let wrongGuesses = 0;
        // event listener
    codeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const codeFormData = new FormData(codeForm);
        const guess1 = codeFormData.get('guess-one');
        const guess2 = codeFormData.get('guess-two');
        const guess3 = codeFormData.get('guess-three');
        const guess4 = codeFormData.get('guess-four');
        const result = checkLock(guess1, guess2, guess3, guess4);
        
        if(result === 'player loses') {
            wrongGuessP.textContent = 'Nope! It\'s still locked. Try again.';
            gameSection.appendChild(wrongGuessP);
            wrongGuesses++;
        }
        else {
            gameSection.hidden = true;
            const winMessage = document.createElement('p');
            winMessage.textContent = '"That\'s it! I\'m free! Look out - behind you!" THUMP';
            gameOutcome.appendChild(winMessage);
        }

        if(wrongGuesses === 3) {
            gameSection.hidden = true;
            const loseMessage = document.createElement('p');
            loseMessage.textContent = '"It didn\'t work. I hear him coming. HURRY, get out of here before he gets you too! Come back later!';
            gameOutcome.appendChild(loseMessage);
            user.daysLeft--;
            saveUser(user);
        }
    });
    
    // create wrong guess prompt <p>
    
    // in GAME OUTCOME
    // create win/loss game message
}

saveUser(user);

if(user.receivedClues === 4) {
    window.location = 'end.html';
}
if(user.daysLeft === 0) {
    window.location = 'end.html';
}