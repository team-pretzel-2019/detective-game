import locationList from '../src/location-list.js';

const locationHeader = document.getElementById('location');

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
console.log(currentLocation);


locationHeader.textContent = currentLocation.title;