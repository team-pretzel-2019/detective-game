import checkCrossword from '../../../src/games/crossword/check-crossword.js';

const test = QUnit.test;
QUnit.module('crossword testing');

test('if input is aero return win message', function(assert) {
    const guess = 'peso';
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
    const guess = 'pEsO';
    const result = checkCrossword(guess);
    const expected = 'player wins';
    
    assert.equal(result, expected);
});