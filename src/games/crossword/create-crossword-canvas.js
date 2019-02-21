import checkCrossword from './check-crossword.js';
import saveUser from '../../functions/saveUser.js';
import allGames from '../all-games-list.js';

function createCrosswordCanvas(gameSection, currentLocation, gameOutcome, user, description, instructionSection, prompt) {
    const descriptionP = document.createElement('p');
    descriptionP.textContent = currentLocation.description;
    description.appendChild(descriptionP);

    const instructions = document.createElement('p');
    instructions.textContent = allGames[1].description;
    instructionSection.appendChild(instructions);
    const promptP = document.createElement('p');
    promptP.textContent = '"I need a four letter word for flying that ends in an \'o\'."';
    prompt.appendChild(promptP);

    const crosswordForm = document.createElement('form');
    const guessInput = document.createElement('input');
    guessInput.type = 'text';
    guessInput.name = 'guess';
    guessInput.id = 'guess-input';
    guessInput.placeholder = 'Enter guess here';
    crosswordForm.appendChild(guessInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Guess Word';
    crosswordForm.appendChild(submitButton);

    gameSection.appendChild(crosswordForm);
    
    const wrongGuessP = document.createElement('p');
    gameSection.appendChild(wrongGuessP);

    const mapAnchor = document.createElement('a');
    mapAnchor.href = './map.html';
    mapAnchor.textContent = 'Return to Map';
    mapAnchor.id = 'map-anchor';
    
    let wrongGuesses = 0;

    crosswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(crosswordForm);
        const wordGuess = formData.get('guess');
        const result = checkCrossword(wordGuess);

        if(result === 'player loses') {
            wrongGuessP.textContent = 'Sorry chum, ' + wordGuess + ' ain\'t what I\'m looking for. Guess again.';
            wrongGuesses++;
        } else {
            const winMessageP = document.createElement('p');
            winMessageP.textContent = currentLocation.clue;
            gameOutcome.appendChild(winMessageP);
            gameOutcome.appendChild(mapAnchor);
            user.receivedClues++;
            user.daysLeft--;
            saveUser(user);
            submitButton.hidden = true;
        }  
        
        if(wrongGuesses === 3) {
            submitButton.hidden = true;
            const loseMessageP = document.createElement('p');
            loseMessageP.textContent = 'You lost this game and wasted a day, try again tomorrow.';
            gameOutcome.appendChild(loseMessageP);
            gameOutcome.appendChild(mapAnchor);
            user.daysLeft--;
            saveUser(user);
        }
    });
}

export default createCrosswordCanvas;