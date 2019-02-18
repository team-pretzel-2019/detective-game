const locations = ['location 1', 'location 2'];

const locationLinks = document.getElementById('location-links');

for(let i = 0; i < locations.length; i++) {
    const location = locations[i];
    
    const link = document.createElement('a');
    const li = document.createElement('li');
    link.textContent = location;
    link.href = 'location.html?name=' + encodeURIComponent(location);
    li.appendChild(link);
    locationLinks.appendChild(li);

}