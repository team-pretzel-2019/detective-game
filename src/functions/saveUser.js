function saveUser(user) {
    const newJson = JSON.stringify(user);
    window.localStorage.setItem('user', newJson);
}
    
export default saveUser;