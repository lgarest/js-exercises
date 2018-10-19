// import the fn
const hello = require('../../lessons/lists/lesson0');

// and test it
const test = require('../../lib/test');
test(
  'it returns \'Hello World!\' if we pass the list [\'Hello World!\']',
  hello(['Hello World!']),
  'Hello World!');
test(
  'it returns \'Hello\' if we pass the list [\'Hello\']',
  hello(),
  '');
test(
  'it returns \'\' if we pass an empty list',
  hello([]),
  '');
test(
  'it returns \'\' if we pass nothing',
  hello(),
  '');