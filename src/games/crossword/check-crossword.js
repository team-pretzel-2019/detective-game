function checkCrossword(guess) {
    const lowerCaseGuess = guess.toLowerCase();
    if(lowerCaseGuess === 'aero') {
        return 'player wins';
    }
    return 'player loses';
}

export default checkCrossword;