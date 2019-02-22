import draw from './draw/draw.js';

function shootOut(popUpSection, villain, totalTime, winP) { 
    popUpSection.hidden = true;

    const range = document.getElementById('range');
    const shotSound = new Audio('../../../assets/audio/shot.mp3');
    range.addEventListener('click', function() {
        shotSound.currentTime = 0;
        shotSound.play();
    });
    
    let startTime = Date.now();
    
    let villainHP = 5;

    villain.addEventListener('click', function() {
        villainHP--;
    });
    
    let timer = setInterval(function() {
        let timePassed = Date.now() - startTime;
        
        if(timePassed >= totalTime) {
            clearInterval(timer);
            winP.textContent = 'lose';
            return;
        }

        if(villainHP === 0) {
            clearInterval(timer);
            winP.textContent = 'win';
            return;
        }

        draw(timePassed, villain);
        
    }, 15);
}

export default shootOut;