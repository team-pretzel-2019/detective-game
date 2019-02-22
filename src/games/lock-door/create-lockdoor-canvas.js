import saveUser from '../../functions/saveUser.js';
import checkLock from './check-lock.js';
import allGames from '../all-games-list.js';

function createLockdoorCanvas(gameSection, currentLocation, gameOutcome, user, description, instructionSection, prompt) {
    const descriptionP = document.createElement('p');
    descriptionP.textContent = currentLocation.description;
    description.appendChild(descriptionP);

    const instructions = document.createElement('p');
    instructions.textContent = allGames[2].description;
    description.appendChild(instructions);

    const promptP = document.createElement('p');
    promptP.textContent = 'Deduce and enter a four digit code to enter!';
    prompt.appendChild(promptP);
    
    const codeForm = document.createElement('form');

    const guessOne = document.createElement('input');
    guessOne.type = 'number';
    guessOne.name = 'guess-one';
    guessOne.min = '0';
    guessOne.max = '9';
    guessOne.value = '0';
    guessOne.id = 'num-input';
    codeForm.appendChild(guessOne);

    const guessTwo = document.createElement('input');
    guessTwo.type = 'number';
    guessTwo.name = 'guess-two';
    guessTwo.min = '0';
    guessTwo.max = '9';
    guessTwo.value = '0';
    guessTwo.id = 'num-input';
    codeForm.appendChild(guessTwo);

    const guessThree = document.createElement('input');
    guessThree.type = 'number';
    guessThree.name = 'guess-three';
    guessThree.min = '0';
    guessThree.max = '9';
    guessThree.value = '0';
    guessThree.id = 'num-input';
    codeForm.appendChild(guessThree);

    const guessFour = document.createElement('input');
    guessFour.type = 'number';
    guessFour.name = 'guess-four';
    guessFour.min = '0';
    guessFour.max = '9';
    guessFour.value = '0';
    guessFour.id = 'num-input';
    codeForm.appendChild(guessFour);

    const buttonP = document.createElement('p');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Unlock';
    buttonP.appendChild(submitButton);
    codeForm.appendChild(buttonP);

    gameSection.appendChild(codeForm);

    const wrongGuessP = document.createElement('p');

    let wrongGuesses = 0;

    const mapAnchor = document.createElement('a');
    mapAnchor.href = './map.html';
    mapAnchor.textContent = 'Return to Map';
    mapAnchor.id = 'map-anchor';

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
        } else {
            instructions.hidden = true;
            wrongGuessP.textContent = null;
            descriptionP.textContent = currentLocation.clue;
            const continueButton = document.createElement('a');
            continueButton.textContent = 'continue...';
            continueButton.href = './boss.html';
            descriptionP.appendChild(continueButton);

            window.setTimeout(goToBoss, 12000);
        }

        if(wrongGuesses === 3) {
            const loseMessage = document.createElement('p');
            loseMessage.textContent = '"It didn\'t work. I hear him coming. HURRY, get out of here before he gets you too! Come back later!';
            gameOutcome.appendChild(loseMessage);
            gameOutcome.appendChild(mapAnchor);
            user.daysLeft--;
            saveUser(user);
            submitButton.hidden = true;
        }
    });
}

function goToBoss() {
    window.location = './boss.html';
}

export default createLockdoorCanvas;