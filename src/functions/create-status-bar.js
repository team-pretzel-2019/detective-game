function createStatusBar(user) {
    const username = document.getElementById('username');
    const daysLeft = document.getElementById('days-left');
    const cluesList = document.getElementById('clues-list');
    const avatarImage = document.getElementById('avatar-image');

    if(user.avatar === 'sloan') {
        avatarImage.src = '../assets/img/avatars/detective-avatar-1.png';
    } else {
        avatarImage.src = '../assets/img/avatars/detective-avatar-2.png';
    }
    
    const totalCluesListArray = [
        'Cocktail napkin',
        'Shave',
        'Good view'
    ];
    
    for(let i = 0; i < user.receivedClues; i++) {
        const clue = totalCluesListArray[i];
        const clueLi = document.createElement('li');
        clueLi.textContent = clue;
        cluesList.appendChild(clueLi);
    }
    
    username.textContent += user.name;
    daysLeft.textContent += user.daysLeft;
}

export default createStatusBar;