// import the fn
const average = require('../../lessons/lists/lesson2');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: 'it returns 2.5 if we pass the list [1, 2, 3, 4]',
  actual: average([1, 2, 3, 4]),
  expected: 2.5
});

test({
  text: 'it returns \'invalid input\' if we pass {}',
  actual: average({}),
  expected: 'invalid input'
});

test({
  text: 'it returns \'invalid input\' if we pass []',
  actual: average([]),
  expected: 'invalid input'
});

test({
  text: 'it returns \'invalid input\' if we pass \'a\'',
  actual: average('a'),
  expected: 'invalid input'
});

test({
  text: 'it returns \'invalid input\' if we pass 2',
  actual: average(2),
  expected: 'invalid input'
});
