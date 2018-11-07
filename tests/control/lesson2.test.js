// import the fn
const evenOrOdd = require('../../lessons/control/lesson2');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: '5 is an odd number',
  actual: evenOrOdd(5),
  expected: 'odd'
});

test({
  text: '3 is an odd number',
  actual: evenOrOdd(3),
  expected: 'odd'
});

test({
  text: '2 is not an odd number',
  actual: evenOrOdd(2),
  expected: 'even'
});

test({
  text: '0 is not an odd number',
  actual: evenOrOdd(0),
  expected: 'even'
});

test({
  text: '\'a\' is not a number',
  actual: evenOrOdd('a'),
  expected: 'not a number'
});

test({
  text: '[] is not a number',
  actual: evenOrOdd([]),
  expected: 'not a number'
});

test({
  text: '{} is not a number',
  actual: evenOrOdd({}),
  expected: 'not a number'
});