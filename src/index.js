import saveUser from './functions/saveUser.js';

const titleArea = document.getElementById('title');
const startStoryButton = document.getElementById('start-story');
const introContainer = document.getElementById('intro-container');
const userProfileForm = document.getElementById('user-profile');

const soundtrack = new Audio('./assets/audio/index.mp3');
soundtrack.play();

startStoryButton.addEventListener('click', function() {
    titleArea.hidden = true;
    introContainer.hidden = false;
});

userProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(userProfileForm);
   
    const userObject = {
        name: formData.get('name'),
        receivedClues: 1,
        daysLeft: 7,
        avatar: formData.get('avatar')
    };
    
    saveUser(userObject);
    
    window.location = 'pages/map.html';
});