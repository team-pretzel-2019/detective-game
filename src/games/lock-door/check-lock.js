function checkLock(guess1, guess2, guess3, guess4) {
    if(guess1 === '1' && guess2 === '2' && guess3 === '3' && guess4 === '4') {
        return 'player wins';
    }
    return 'player loses';
}

export default checkLock;