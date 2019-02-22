import loadUser from '../src/functions/loadUser.js';
const results = document.getElementById('results');

const soundtrack = new Audio('../assets/audio/end.mp3');
soundtrack.play();

const user = loadUser();

if(user.daysLeft === 0) {
    results.textContent = 'The trail\'s gone cold. You read in next week\'s newspaper that a woman named Violet is being tried for the murder of her parent. A man with a glass eye found Violet trying to dump her body in the river...';
} else if(user.outcome === 'win') {
    results.textContent = 'The glass eyed man lays on the ground at your feet. Police sirens wail as your head pounds. The police arrive and find Violet about to be buried, most likely after the killer dealt with you. The next day you get chewed out by the boys in blue, but your story checks and they let you go. You meet up with Violet who is a wreck, mentally and physically, but she\'ll recover. Case closed!';
} else {
    results.textContent = 'The glass eyed man reaches you before you can get enough bullets in him. You two tussle but you\'re too weak from the blackjack you took to the head earlier. He knocks you out and when you wake up you are in a cold jail cell. The police buy his story and it looks like this is your new home...';
}