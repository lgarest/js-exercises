// import the fn
const average = require('../../lessons/lists/lesson2');

// and test it
const test = require('../../lib/test');
test('it returns 10 if we pass the list [1, 2, 3, 4]',
  average([1, 2, 3, 4]), 2.5);
test('it returns \'invalid input\' if we pass {}',
  average({}), 'invalid input');
test('it returns \'invalid input\' if we pass []',
 average([]), 'invalid input');
test('it returns \'invalid input\' if we pass \'a\'',
 average('a'), 'invalid input');
test('it returns \'invalid input\' if we pass 2',
 average(2), 'invalid input');
