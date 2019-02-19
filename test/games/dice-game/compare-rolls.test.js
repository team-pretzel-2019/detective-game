import compareRolls from '../../../src/games/dice-game/compare-rolls.js';

const test = QUnit.test;

QUnit.module('Compare rolls');

test('if dice one is lower, return \'dice one is lower\'', function(assert) {
    const diceroll1 = 3;
    const diceroll2 = 5;
    const result = compareRolls(diceroll1, diceroll2);
    const expected = 'dice one is lower';
    assert.equal(result, expected);
});

test('if dice one is high, return \'dice one is higher\'', function(assert) {
    const diceroll1 = 6;
    const diceroll2 = 5;
    const result = compareRolls(diceroll1, diceroll2);
    const expected = 'dice one is higher';
    assert.equal(result, expected);
});

test('if dice rolls are equal, return \'tie\'', function(assert) {
    const diceroll1 = 6;
    const diceroll2 = 6;
    const result = compareRolls(diceroll1, diceroll2);
    const expected = 'tie';
    assert.equal(result, expected);
});