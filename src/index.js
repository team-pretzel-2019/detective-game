import saveUser from './functions/saveUser.js';

const titleArea = document.getElementById('title');
const startStoryButton = document.getElementById('start-story');
const introArea = document.getElementById('intro');
const userProfileForm = document.getElementById('user-profile');

startStoryButton.addEventListener('click', function() {
    titleArea.hidden = true;
    introArea.hidden = false;
});

userProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(userProfileForm);
   
    const userObject = {
        name: formData.get('name'),
        receivedClues: 1,
        daysLeft: 7
    };
    
    saveUser(userObject);
    
    window.location = 'pages/map.html';
});