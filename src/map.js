import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';
import createStatusBar from './functions/create-status-bar.js';
import updateStatusBar from './functions/update-status-bar.js';

const locationLinks = document.getElementById('map');

const user = loadUser();
createStatusBar(user);

for(let i = 0; i < locationList.length; i++) {
    const location = locationList[i];
    const link = document.createElement('a');

    // get rid of list item elmCreate
    // const li = document.createElement('li');

    link.addEventListener('click', function() {
        if(user.receivedClues === location.requiredClues) {
            link.href = 'location.html?name=' + encodeURIComponent(location.name);
        } else {
            user.daysLeft--;
            updateStatusBar(user);
            saveUser(user);
        }

        if(user.daysLeft === 0) {
            window.location = 'end.html';
        }
    });
    
    link.textContent = location.title;
    // add id tag to each location by their object name
    link.id = location.name;
    // li.appendChild(link);
    locationLinks.appendChild(link);
}
