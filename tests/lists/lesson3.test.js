// import the fn
const reverse = require('../../lessons/lists/lesson3');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: 'it returns [4, 3, 2, 1] if we pass the list [1, 2, 3, 4]',
  actual: reverse([1, 2, 3, 4]),
  expected: [4, 3, 2, 1],
});

test({
  text: 'it returns [\'o\', \'e\', \'n\'] if we pass the list [\'n\', \'e\', \'o\']',
  actual: reverse(['n', 'e', 'o']),
  expected: ['o', 'e', 'n'],
});

test({
  text: 'it returns [] if we pass []',
  actual: reverse([]),
  expected: []
});

test({
  text: 'it returns \'invalid input\' if we pass {}',
  actual: reverse({}),
  expected: 'invalid input'
});

test({
  text: 'it returns \'invalid input\' if we pass \'a\'',
  actual: reverse('a'),
  expected: 'invalid input'
});

test({
  text: 'it returns \'invalid input\' if we pass 2',
  actual: reverse(2),
  expected: 'invalid input'
});
