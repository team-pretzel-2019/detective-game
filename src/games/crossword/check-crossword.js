function checkCrossword(guess) {
    const lowerCaseGuess = guess.toLowerCase();
    if(lowerCaseGuess === 'peso') {
        return 'player wins';
    }
    return 'player loses';
}

export default checkCrossword;