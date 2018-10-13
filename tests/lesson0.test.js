// import the fn
const hello = require('../exercises/lesson0');

// and test it
const test = require('../lib/test');
test('it returns Hello World!', hello(), 'Hello World!');