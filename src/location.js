const locationHeader = document.getElementById('location');

const searchParams = new URLSearchParams(window.location.search);
const locationName = searchParams.get('name');

locationHeader.textContent = locationName;