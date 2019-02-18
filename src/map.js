import locationList from '../src/location-list.js';

const locationLinks = document.getElementById('location-links');

for(let i = 0; i < locationList.length; i++) {
    const location = locationList[i];
    
    const link = document.createElement('a');
    const li = document.createElement('li');
    link.textContent = location.title;
    link.href = 'location.html?name=' + encodeURIComponent(location.name);
    li.appendChild(link);
    locationLinks.appendChild(li);

}