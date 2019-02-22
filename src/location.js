import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';
import createDiceCanvas from './games/dice-game/create-dice-canvas.js';
import createCrosswordCanvas from './games/crossword/create-crossword-canvas.js';
import createLockdoorCanvas from './games/lock-door/create-lockdoor-canvas.js';
import createStatusBar from './functions/create-status-bar.js';
import muteToggle from './functions/mute-toggle.js';

const locationHeader = document.getElementById('location-title');
const gameSection = document.getElementById('game');
const gameOutcome = document.getElementById('game-outcome');
const description = document.getElementById('description');
const instructionSection = document.getElementById('instructions');
const prompt = document.getElementById('prompt');
const tallImageDiv = document.getElementById('right-bottom-left');
const gameImageDiv = document.getElementById('game-right');

const soundtrack = new Audio('../assets/audio/location.mp3');
soundtrack.play();

muteToggle(soundtrack);

const user = loadUser();
createStatusBar(user);

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
    createDiceCanvas(gameSection, currentLocation, gameOutcome, user, description, instructionSection, prompt);
    const tallImage = document.createElement('img');
    tallImage.src = currentLocation.tallImage;
    tallImageDiv.appendChild(tallImage);
    const gameImage = document.createElement('img');
    gameImage.src = currentLocation.gameImage;
    gameImageDiv.appendChild(gameImage);
}
if(currentLocation.id === 'location2') {
    createCrosswordCanvas(gameSection, currentLocation, gameOutcome, user, description, instructionSection, prompt);
    const tallImage = document.createElement('img');
    tallImage.src = currentLocation.tallImage;
    tallImageDiv.appendChild(tallImage);
    const gameImage = document.createElement('img');
    gameImage.src = currentLocation.gameImage;
    gameImageDiv.appendChild(gameImage);

}
if(currentLocation.id === 'location3') {
    createLockdoorCanvas(gameSection, currentLocation, gameOutcome, user, description, instructionSection, prompt);
    const tallImage = document.createElement('img');
    tallImage.src = currentLocation.tallImage;
    tallImageDiv.appendChild(tallImage);
    const gameImage = document.createElement('img');
    gameImage.src = currentLocation.gameImage;
    gameImageDiv.appendChild(gameImage);
}

saveUser(user);

if(user.daysLeft === 0) {
    window.location = 'end.html';
}