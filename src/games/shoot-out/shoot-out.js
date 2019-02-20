import draw from './draw/draw.js';

function shootOut(popUpSection, villain, totalTime, winP) {
    
    popUpSection.hidden = true;
    
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