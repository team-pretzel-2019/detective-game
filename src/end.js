const results = document.getElementById('results');

const json = window.localStorage.getItem('user');
const user = JSON.parse(json);

if(user.daysLeft === 0) {
    results.textContent = 'You\'re a big loser';
} else {
    results.textContent = 'You have won the game.';
}