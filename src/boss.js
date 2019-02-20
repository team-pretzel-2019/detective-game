import shootOut from './games/shoot-out/shoot-out.js';
import loadUser from './functions/loadUser.js';
import saveUser from './functions/saveUser.js';

const villain = document.getElementById('villain');
const button = document.getElementById('start-button');
const popUpSection = document.getElementById('pop-up');
// TODO refactor this variable
const winP = document.getElementById('win');
const user = loadUser();

const totalTime = 3000;

button.addEventListener('click', function() {
    shootOut(popUpSection, villain, totalTime, winP);
});

let timer = setInterval(function() {
    if(winP.textContent === 'lose') {
        
        user.outcome = 'lose';
        saveUser(user);
        clearInterval(timer);
        window.location = 'end.html';
    }
    if(winP.textContent === 'win') {
        user.outcome = 'win';
        saveUser(user);
        clearInterval(timer);
        window.location = 'end.html';
    }
}, 1000);


