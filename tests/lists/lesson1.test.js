// import the fn
const hello = require('../../lessons/lists/lesson1');

// and test it
const test = require('../../lib/test');
test(
  'it returns \'Hello World!\' if we pass the list [\'Hello World!\']',
  hello(['Hello World!']),
  'Hello World!');
test(
  'it returns \'Hello World !\' if we pass the list [\'Hello\', \'World\', \'!\']',
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