function loadUser() {
    const json = window.localStorage.getItem('user');
    const user = JSON.parse(json);
    return user;
}

export default loadUser;