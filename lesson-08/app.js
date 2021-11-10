const chalk = require('chalk');
const data = require('./data');

let newData = chalk.bgBlue(chalk.red(data.map(item => item)))
console.log(newData);