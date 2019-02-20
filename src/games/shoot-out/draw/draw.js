function draw(timePassed, villain) {
    villain.style.width = timePassed / 7 + 'px';
    villain.style.height = timePassed / 7 + 'px';
}

export default draw;