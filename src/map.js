import locationList from '../src/location-list.js';
const json = window.localStorage.getItem('user');
const user = JSON.parse(json);

console.log(user.receivedClues);

const locationLinks = document.getElementById('location-links');

for(let i = 0; i < locationList.length; i++) {
    const location = locationList[i];
    const link = document.createElement('a');
    const li = document.createElement('li');
    link.addEventListener('click', function() {
        if(user.receivedClues === location.requiredClues) {
            link.href = 'location.html?name=' + encodeURIComponent(location.name);
            
        }   else {
                console.log('wrong');
        }
    });
    link.textContent = location.title;
    li.appendChild(link);
    locationLinks.appendChild(li);

}