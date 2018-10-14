const chalk=require('chalk');


const green = chalk.green;
const red = chalk.red;

let counter = 1;

const error = (a, b) => ({
  colorCounter: red(counter),
  result: `${red('Fail')}: got ${red(a)} and was expecting ${green(b)}`,
});

const pass = () => ({
  colorCounter: green(counter),
  result: green('OK'),
});

function assertEqual(msg, a, b) {
  const {colorCounter, result} = a !== b ? error(a, b) : pass();
  const outputMsg = `  #${colorCounter}: ${msg} => ${result}`;
  console.log(outputMsg);
  counter++;
}

module.exports = assertEqual;