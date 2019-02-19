const test = QUnit.test;
QUnit.module('crossword testing');

function checkCrossword(guess) {
    const lowerCaseGuess = guess.toLowerCase();
    if(lowerCaseGuess === 'aero') {
        return 'player wins';
    }
    return 'player loses';
}

test('if input is aero return win message', function(assert) {
    const guess = 'aero';
    const result = checkCrossword(guess);
    const expected = 'player wins';

    assert.equal(result, expected);
});

test('if input is not aero return player loses', function(assert) {

    const guess = 'peach';
    const result = checkCrossword(guess);
    const expected = 'player loses';

    assert.equal(result, expected);
});

test('if input is aero with weird captilzation, return player wins', function(assert) {
    const guess = 'AerO';
    const result = checkCrossword(guess);
    const expected = 'player wins';
    
    assert.equal(result, expected);
});