import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';
import diceGame from './games/dice-game/dice-game.js';

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
    const playButton = document.createElement('button');
    playButton.textContent = 'PLAY';
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

    let gamesLost = 0;
    
    playButton.addEventListener('click', function() {
        const gameResult = diceGame();
        playerRoll1.textContent = gameResult.playerRoll1 + ', ';
        playerRoll2.textContent = gameResult.playerRoll2;
        playerTotalResults.textContent = gameResult.playerRoll1 + gameResult.playerRoll2;
        opponentRoll1.textContent = gameResult.opponentRoll1 + ', ';
        opponentRoll2.textContent = gameResult.opponentRoll2;
        opponentTotalResults.textContent = gameResult.opponentRoll1 + gameResult.opponentRoll2;
        resultMessage.textContent = gameResult.result;
        if(gameResult.result === 'player wins') {
            const clueP = document.createElement('p');
            clueP.textContent = currentLocation.clue;
            gameOutcome.appendChild(clueP);
            user.receivedClues++;
            user.daysLeft--;
            saveUser(user);
            gameSection.hidden = true;
        } else {
            gamesLost++;
            console.log(gamesLost); 
            
        }
        if(gamesLost === 3) {
            gameSection.hidden = true;
            const lossP = document.createElement('p');
            lossP.textContent = 'You\'ve lost the game and lost a day, return to the map';
            gameOutcome.appendChild(lossP);
            user.daysLeft--;
            saveUser(user);
        }
    });

}

saveUser(user);

if(user.receivedClues === 4) {
    window.location = 'end.html';
}
if(user.daysLeft === 0) {
    window.location = 'end.html';
}