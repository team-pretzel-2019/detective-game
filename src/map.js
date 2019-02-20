import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';

const user = loadUser();

const avatarImage = document.getElementById('avatar-image');
const username = document.getElementById('username');
const daysLeft = document.getElementById('days-left');
const cluesList = document.getElementById('clues-list');

const totalCluesListArray = [
    'Cocktail napkin',
    'Shave',
    'Good view'
];

const currentCluesListArray = [];

if(user.receivedClues >= 1) {
    currentCluesListArray.push(totalCluesListArray[0]);
}
if(user.receivedClues >= 2) {
    currentCluesListArray.push(totalCluesListArray[1]);
}
if(user.receivedClues >= 3) {
    currentCluesListArray.push(totalCluesListArray[2]);
}

for(let i = 0; i < currentCluesListArray.length; i++) {
    const clue = currentCluesListArray[i];
    const clueLi = document.createElement('li');
    clueLi.textContent = clue;
    cluesList.appendChild(clueLi);
}

// avatarImage.src = ''; needs image
username.textContent += user.name;
daysLeft.textContent += user.daysLeft;




const locationLinks = document.getElementById('location-links');

for(let i = 0; i < locationList.length; i++) {
    const location = locationList[i];
    const link = document.createElement('a');
    const li = document.createElement('li');
    // checking if you have enough clues to go to next location
    link.addEventListener('click', function() {
        if(user.receivedClues === location.requiredClues) {
            link.href = 'location.html?name=' + encodeURIComponent(location.name);
        } else {
            user.daysLeft--;
            saveUser(user);
            console.log(user.daysLeft);

        }
        if(user.daysLeft === 0) {
            window.location = 'end.html';
        }
    });
    link.textContent = location.title;
    li.appendChild(link);
    locationLinks.appendChild(li);

}