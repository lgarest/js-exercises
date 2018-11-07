// import the fn
const hello = require('../../lessons/control/lesson0');

// and test it
const test = require('../../lib/test')().testCase;

test({
  text: 'it returns \'Hello World!\'',
  actual: hello(),
  expected: 'Hello World!'
});