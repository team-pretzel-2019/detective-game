import saveUser from './functions/saveUser.js';

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