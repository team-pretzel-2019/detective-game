import saveUser from './functions/saveUser.js';

const titleArea = document.getElementById('title');
const startStoryButton = document.getElementById('start-story');
const introArea = document.getElementById('intro');
const enterNameButton = document.getElementById('enter-name');
const userArea = document.getElementById('user-area');

startStoryButton.addEventListener('click', function() {
    titleArea.hidden = true;
    introArea.hidden = false;
});

enterNameButton.addEventListener('click', function() {
    userArea.hidden = false;
    enterNameButton.hidden = true;
});

const userProfileForm = document.getElementById('user-profile');

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