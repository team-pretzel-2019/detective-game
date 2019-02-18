import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';

const user = loadUser();

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