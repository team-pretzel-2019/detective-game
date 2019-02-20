import loadUser from '../src/functions/loadUser.js';
const results = document.getElementById('results');

const user = loadUser();

if(user.daysLeft === 0) {
    results.textContent = 'You\'re a big loser';
} else if(user.outcome === 'win') {
    results.textContent = 'You have won the game.';
} else {
    results.textContent = 'The villain killed ya';
}