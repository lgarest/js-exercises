// import the fn
const getCurrentAge = require('../exercises/lesson4');

// and test it
const test = require('../lib/test');
test(
  'someone born on 1st January 1980 was 19 years old on The Matrix premiere',
  getCurrentAge('01/01/1980'), 19
);
test(
  'someone born on 28th February 1989 was 10 years old on The Matrix premiere',
  getCurrentAge('28/02/1989'), 10
);
test(
  'someone born on 1st January 2000 wasn\'t even born on The Matrix premiere',
  getCurrentAge('01/01/2000'), 'Was not even born!'
);
test(
  'someone born on 31st March 1999 was just born on The Matrix premiere',
  getCurrentAge('31/03/1999'), 'Was just born!'
);