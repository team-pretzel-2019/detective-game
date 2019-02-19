import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';
import diceGame from './games/dice-game/dice-game.js';

const playerRoll1 = document.getElementById('player-roll-1');
const playerRoll2 = document.getElementById('player-roll-2');
const playerTotal = document.getElementById('player-total');
const opponentRoll1 = document.getElementById('opponent-roll-1');
const opponentRoll2 = document.getElementById('opponent-roll-2');
const opponentTotal = document.getElementById('opponent-total');
const playButton = document.getElementById('play');
const resultMessage = document.getElementById('result-message');

playButton.addEventListener('click', function() {
    const gameResult = diceGame();
    playerRoll1.textContent = gameResult.playerRoll1;
    playerRoll2.textContent = gameResult.playerRoll2;
    playerTotal.textContent = gameResult.playerRoll1 + gameResult.playerRoll2;
    opponentRoll1.textContent = gameResult.opponentRoll1;
    opponentRoll2.textContent = gameResult.opponentRoll2;
    opponentTotal.textContent = gameResult.opponentRoll1 + gameResult.opponentRoll2;
    resultMessage.textContent = gameResult.result;
    console.log(gameResult);
});

const user = loadUser();

console.log(user);

const locationHeader = document.getElementById('location');
const clueP = document.getElementById('clue');

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
clueP.textContent = currentLocation.clue;

// if you win do this
user.receivedClues++;
user.daysLeft--;

saveUser(user);

if(user.receivedClues === 4) {
    window.location = 'end.html';
}
if(user.daysLeft === 0) {
    window.location = 'end.html';
}