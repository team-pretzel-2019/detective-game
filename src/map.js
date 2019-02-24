import locationList from '../src/location-list.js';
import saveUser from './functions/saveUser.js';
import loadUser from './functions/loadUser.js';
import createStatusBar from './functions/create-status-bar.js';
import updateStatusBar from './functions/update-status-bar.js';
import muteToggle from './functions/mute-toggle.js';

const locationLinks = document.getElementById('map');

const soundtrack = new Audio('../assets/audio/map.mp3');
soundtrack.play();

muteToggle(soundtrack);

const user = loadUser();
createStatusBar(user);

for(let i = 0; i < locationList.length; i++) {
    const location = locationList[i];
    const link = document.createElement('a');
    const icon = document.createElement('img');
    icon.src = location.icon;

    link.addEventListener('click', function() {
        if(user.receivedClues === location.requiredClues) {
            // note that encodeURIComponent is unnecessary if your
            // component is alphanumeric. This is mainly for
            // escaping symbols like $, =, &, #, etc.
            // See MDN for details on when you'd want to use this method.
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
    
    link.id = location.name;
    link.appendChild(icon);
    locationLinks.appendChild(link);
}
