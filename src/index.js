const userProfileForm = document.getElementById('user-profile');

userProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(userProfileForm);
   
    const userObject = {
        name: formData.get('name')
    };
    
    const json = JSON.stringify(userObject);
    window.localStorage.setItem('user', json);

    window.location = 'pages/map.html';
});