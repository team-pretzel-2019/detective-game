function createStatusBar(user) {
    const avatarImage = document.getElementById('avatar-image');
    const username = document.getElementById('username');
    const daysLeft = document.getElementById('days-left');
    const cluesList = document.getElementById('clues-list');
    
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
    
    avatarImage.src = '';
    username.textContent += user.name;
    daysLeft.textContent += user.daysLeft;
}

export default createStatusBar;