// import the fn
const calculator = require('../../lessons/control/lesson5');

// and test it
const test = require('../../lib/test');
test('2 plus 3 equals 5', calculator(2, '+', 3), 5);
test('2 minus 3 equals -1', calculator(2, '-', 3), -1);
test('2 times 3 equals 6', calculator(2, '*', 3), 6);
test('2 divided by 3 equals 0.67', calculator(2, '/', 3), (0.67).toFixed(2));
test(
  'any number divided by 0 is Infinity',
  calculator(5, '/', 0
), (Infinity).toFixed(2));
test('5 modul 3 equals 2', calculator(5, '%', 3), 2);
test('! is not a valid input', calculator('!'), 'not a valid input');
test('\'a\' is not a valid input', calculator('a'), 'not a valid input');
test('undefined is not a valid input', calculator(), 'not a valid input');
test('list is not a valid input', calculator([]), 'not a valid input');
test('object is not a valid input', calculator({}), 'not a valid input');
