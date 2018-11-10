// import the fn
const rollDice = require('../../lessons/control/lesson6');

// and test it
const test = require('../../lib/test')().testCase;

// Prepare mocks
const originalMath = Object.create(global.Math);
const mockMath = Object.create(global.Math);

// Mock random
global.Math = mockMath;

[4, 6, 8, 10, 12, 20, 100].map((dice) => {
  // Randomness set at 0.99 will make the dice
  // roll always the highest number.
  mockMath.random = () => 0.99;
  test({
    text: `A ${dice} sided dice rolls correctly the highest number`,
    actual: rollDice(dice),
    expected: dice,
  });
  // Randomness set at 0.50 will make the dice
  // roll always the middle number.
  mockMath.random = () => 0.50;
  test({
    text: `A ${dice} sided dice rolls correctly the middle number`,
    actual: rollDice(dice),
    expected: (dice/2)+1,
  });
  // Randomness set at 0.00 will make the dice
  // roll always the lowest number.
  mockMath.random = () => 0.00;
  test({
    text: `A ${dice} sided dice rolls correctly the lowest number`,
    actual: rollDice(dice),
    expected: 1,
  });
});

// Restore random
global.Math = originalMath;
