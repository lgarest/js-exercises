// import the fn
const calculator = require('../../lessons/control/lesson5');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: '2 plus 3 equals 5',
  actual: calculator(2, '+', 3),
  expected: 5
});

test({
  text: '2 minus 3 equals -1',
  actual: calculator(2, '-', 3),
  expected: -1
});

test({
  text: '2 times 3 equals 6',
  actual: calculator(2, '*', 3),
  expected: 6
});

test({
  text: '2 divided by 3 equals 0.67',
  actual: calculator(2, '/', 3),
  expected: (0.67).toFixed(2)
});

test({
  text: 'any number divided by 0 is Infinity',
  actual: calculator(5, '/', 0),
  expected: (Infinity).toFixed(2)
});

test({
  text: '5 modul 3 equals 2',
  actual: calculator(5, '%', 3),
  expected: 2
});

test({
  text: '! is not a valid input',
  actual: calculator('!'),
  expected: 'not a valid input'
});

test({
  text: '\'a\' is not a valid input',
  actual: calculator('a'),
  expected: 'not a valid input'
});

test({
  text: 'undefined is not a valid input',
  actual: calculator(),
  expected: 'not a valid input'
});

test({
  text: 'list is not a valid input',
  actual: calculator([]),
  expected: 'not a valid input'
});

test({
  text: 'object is not a valid input',
  actual: calculator({}),
  expected: 'not a valid input'
});
