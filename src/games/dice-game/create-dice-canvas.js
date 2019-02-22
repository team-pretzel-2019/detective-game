import diceGame from './dice-game.js';
import saveUser from '../../functions/saveUser.js';
import allGames from '../all-games-list.js';

function createDiceCanvas(gameSection, currentLocation, gameOutcome, user, description) {
    const descriptionP = document.createElement('p');
    descriptionP.textContent = currentLocation.description;
    description.appendChild(descriptionP);

    const brake = document.createElement('br');
    description.appendChild(brake);
    
    const instructions = document.createElement('p');
    instructions.textContent = allGames[0].description;
    description.appendChild(instructions);

    const playButton = document.createElement('button');
    playButton.textContent = 'Roll Dice';
    playButton.id = 'play-button';
    gameSection.appendChild(playButton);

    const playerResultsSection = document.createElement('section');
    playerResultsSection.id = 'player-results';
    const playerDiceRolls = document.createElement('p');
    playerDiceRolls.textContent = 'Your Dice Rolls: ';
    const playerRoll1 = document.createElement('span');
    playerRoll1.id = 'player-roll-1';
    const playerRoll2 = document.createElement('span');
    playerRoll2.id = 'player-roll-2';
    playerDiceRolls.appendChild(playerRoll1);
    playerDiceRolls.appendChild(playerRoll2);
    gameSection.appendChild(playerDiceRolls);

    const playerTotal = document.createElement('p');
    playerTotal.textContent = 'Total: ';
    const playerTotalResults = document.createElement('span');
    playerTotalResults.id = 'player-total-results';
    playerTotal.appendChild(playerTotalResults);
    gameSection.appendChild(playerTotal);

    const opponentResultsSection = document.createElement('section');
    opponentResultsSection.id = 'opponent-results';
    const opponentDiceRolls = document.createElement('p');
    opponentDiceRolls.textContent = 'Opponent Dice Rolls: ';
    const opponentRoll1 = document.createElement('span');
    opponentRoll1.id = 'opponent-roll-1';
    const opponentRoll2 = document.createElement('span');
    opponentRoll2.id = 'opponent-roll-2';
    opponentDiceRolls.appendChild(opponentRoll1);
    opponentDiceRolls.appendChild(opponentRoll2);
    gameSection.appendChild(opponentDiceRolls);

    const opponentTotal = document.createElement('p');
    opponentTotal.textContent = 'Total: ';
    const opponentTotalResults = document.createElement('span');
    opponentTotalResults.id = 'opponent-total-results';
    opponentTotal.appendChild(opponentTotalResults);
    gameSection.appendChild(opponentTotal);

    const resultsMessageSection = document.createElement('section');
    const resultMessage = document.createElement('p');
    resultMessage.id = 'result-message';
    resultsMessageSection.appendChild(resultMessage);
    gameSection.appendChild(resultsMessageSection);

    const mapAnchor = document.createElement('a');
    mapAnchor.href = './map.html';
    mapAnchor.textContent = 'Return to Map';
    mapAnchor.id = 'map-anchor';

    let gamesLost = 0;
    
    playButton.addEventListener('click', function() {
        // descriptionP.hidden = true;

        const diceSound = new Audio('../../../assets/audio/dice.mp3');
        diceSound.play();

        const gameResult = diceGame();

        playerRoll1.textContent = gameResult.playerRoll1 + ', ';
        playerRoll2.textContent = gameResult.playerRoll2;
        playerTotalResults.textContent = gameResult.playerRoll1 + gameResult.playerRoll2;

        opponentRoll1.textContent = gameResult.opponentRoll1 + ', ';
        opponentRoll2.textContent = gameResult.opponentRoll2;
        opponentTotalResults.textContent = gameResult.opponentRoll1 + gameResult.opponentRoll2;

        resultMessage.textContent = gameResult.result;

        if(gameResult.result === 'Player Wins!') {
            descriptionP.textContent = currentLocation.clue;
            descriptionP.appendChild(brake);
            descriptionP.appendChild(mapAnchor);
            instructions.hidden = true;
            const clueP = document.createElement('p');
            clueP.textContent = currentLocation.clue;
            user.receivedClues++;
            user.daysLeft--;
            saveUser(user);
            playButton.hidden = true;
        } else {
            gamesLost++;
        }
        
        if(gamesLost === 3) {
            playButton.hidden = true;
            const lossP = document.createElement('p');
            lossP.textContent = 'You\'ve lost the game and lost a day, return to the map';
            gameOutcome.appendChild(lossP);
            gameOutcome.appendChild(mapAnchor);
            user.daysLeft--;
            saveUser(user);
        }
    });
}

export default createDiceCanvas;