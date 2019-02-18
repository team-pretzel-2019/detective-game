const locationHeader = document.getElementById('location');

const searchParams = new URLSearchParams(window.location.search);
const toFind = searchParams.get() 

// locationHeader.textContent