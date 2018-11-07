// import the fn
const isOdd = require('../../lessons/control/lesson1');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: '5 is an odd number',
  actual: isOdd(5),
  expected: true
});

test({
  text: '3 is an odd number',
  actual: isOdd(3),
  expected: true
});

test({
  text: '2 is not an odd number',
  actual: isOdd(2),
  expected: false
});

test({
  text: '0 is not an odd number',
  actual: isOdd(0),
  expected: false
});

test({
  text: '\'a\' is not a number',
  actual: isOdd('a'),
  expected: false
});

test({
  text: '[] is not a number',
  actual: isOdd([]),
  expected: false
});

test({
  text: '{} is not a number',
  actual: isOdd({}),
  expected: false
});