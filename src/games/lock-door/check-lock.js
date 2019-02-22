function checkLock(guess1, guess2, guess3, guess4) {
    if(guess1 === '2' && guess2 === '3' && guess3 === '5' && guess4 === '8') {
        return 'player wins';
    }
    return 'player loses';
}

export default checkLock;