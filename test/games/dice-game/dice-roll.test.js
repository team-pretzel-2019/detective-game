import diceRoll from '../../../src/games/dice-game/dice-roll.js';

const test = QUnit.test;
QUnit.module('Dice Roll Game');

test('will dice roll return number equal to or less than 6', function(assert) {
    const result = diceRoll() <= 6;
    const expected = true;
    assert.equal(result, expected);
});

test('will dice roll return number >= 1', function(assert) {
    const result = diceRoll() >= 1;
    const expected = true;
    assert.equal(result, expected);
});
