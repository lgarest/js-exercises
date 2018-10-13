const chalk=require('chalk');

let counter = 1;

function assertEqual(msg, a, b) {
  const result = a === b && chalk.green('OK')
    || `${chalk.red('Fail')}: got ${chalk.red(a)} and was expecting ${chalk.green(b)}`
  console.log(`  #${counter++}: Testing that ${msg} => ${result}`);
}

module.exports = assertEqual;