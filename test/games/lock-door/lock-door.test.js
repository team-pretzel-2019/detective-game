import checkLock from '../../../src/games/lock-door/check-lock.js';

const test = QUnit.test;
QUnit.module('lock door tests');

test('correct guess return player wins', function(assert) {
    const guess1 = '2';
    const guess2 = '3';
    const guess3 = '5';
    const guess4 = '8';

    const result = checkLock(guess1, guess2, guess3, guess4);
    const expected = 'player wins';

    assert.equal(result, expected);
});

test('any wrong guess return player loses', function(assert) {
    const guess1 = '1';
    const guess2 = '2';
    const guess3 = '5';
    const guess4 = '4';

    const result = checkLock(guess1, guess2, guess3, guess4);
    const expected = 'player loses';

    assert.equal(result, expected);
});