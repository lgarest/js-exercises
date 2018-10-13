// import the fn
const isOdd = require('../exercises/lesson1');

// and test it
const test = require('../lib/test');
test('5 is an odd number', isOdd(5), true);
test('3 is an odd number', isOdd(3), true);
test('2 is not an odd number', isOdd(2), false);
test('0 is not an odd number', isOdd(0), false);
test(`'a' is not a number`, isOdd('a'), false);
test('[] is not a number', isOdd([]), false);
test('{} is not a number', isOdd({}), false);