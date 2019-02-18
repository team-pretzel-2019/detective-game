import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';

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