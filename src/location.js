import locationList from '../src/location-list.js';

const json = window.localStorage.getItem('user');
const user = JSON.parse(json);

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

const newJson = JSON.stringify(user);
window.localStorage.setItem('user', newJson);

console.log(newJson);