import saveUser from '../../functions/saveUser.js';
import checkLock from './check-lock.js';
import allGames from '../all-games-list.js';


function createLockdoorCanvas(gameSection, currentLocation, gameOutcome, user) {
    const descriptionP = document.createElement('p');
    descriptionP.textContent = currentLocation.description;
    gameSection.appendChild(descriptionP);

    const instructions = document.createElement('p');
    instructions.textContent = allGames[2].description;
    gameSection.appendChild(instructions);
    
    const codeForm = document.createElement('form');

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

    const submitButton = document.createElement('button');
    submitButton.textContent = 'SUBMIT';
    codeForm.appendChild(submitButton);

    gameSection.appendChild(codeForm);

    const wrongGuessP = document.createElement('p');
    let wrongGuesses = 0;

    codeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        descriptionP.hidden = true;

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
            const mapButton = document.getElementById('map-button');
            mapButton.hidden = true;
            const winMessage = document.createElement('p');
            winMessage.textContent = currentLocation.clue;
            const continueButton = document.createElement('a');
            continueButton.textContent = 'continue...';
            continueButton.href = './end.html';
            gameOutcome.appendChild(winMessage);
            gameOutcome.appendChild(continueButton);

            window.setTimeout(goToEnd, 2000);
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
}

function goToEnd() {
    window.location = './end.html';
}

export default createLockdoorCanvas;