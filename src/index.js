const userProfileForm = document.getElementById('user-profile');

userProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(userProfileForm);
   
    const userObject = {
        name: formData.get('name')
    };
    
    console.log(userObject.name);
});