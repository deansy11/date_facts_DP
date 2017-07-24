const moment = require('moment');
moment().format();

// requirejs.config({
//   packages: [{
//     name: 'moment',
//     location: '[bower_components | node_modules]/moment',
//     main: 'moment'
//   }]
// })

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let dayNumber = moment().format("DDD") + "th";
let seconds = moment().format("s");

console.log("It is " + chalk.blue(date) + " .");
console.log("It is the " + chalk.magenta(dayNumber) + " day of the year.");
console.log("It is " + chalk.green(seconds) + " seconds into the day.");
