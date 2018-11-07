// import the fn
const hello = require('../../lessons/lists/lesson1');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: 'it returns \'Hello World!\' if we pass the list [\'Hello World!\']',
  actual: hello(['Hello World!']),
  expected: 'Hello World!'
});

test({
  text: 'it returns \'Hello World !\' if we pass the list [\'Hello\', \'World\', \'!\']',
  actual: hello(),
  expected: ''
});

test({
  text: 'it returns \'\' if we pass an empty list',
  actual: hello([]),
  expected: ''
});

test({
  text: 'it returns \'\' if we pass nothing',
  actual: hello(),
  expected: ''
});
