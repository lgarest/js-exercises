// import the fn
const celsiusToFahrenheit = require('../../lessons/control/lesson3');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: '5 is an odd number',
  actual: celsiusToFahrenheit(60),
  expected: 140
});

test({
  text: '3 is an odd number',
  actual: celsiusToFahrenheit(0),
  expected: 32
});

test({
  text: '2 is not an odd number',
  actual: celsiusToFahrenheit(-38),
  expected: -36.4
});

test({
  text: '0 is not an odd number',
  actual: celsiusToFahrenheit(-37),
  expected: -34.6
});

test({
  text: '\'a\' is not a number',
  actual: celsiusToFahrenheit('a'),
  expected: 'not a number'
});

test({
  text: '[] is not a number',
  actual: celsiusToFahrenheit([]),
  expected: 'not a number'
});

test({
  text: '{} is not a number',
  actual: celsiusToFahrenheit({}),
  expected: 'not a number'
});