const moment = require('moment');
moment().format();
const chalk = require('chalk');

let date = moment();
let dayNumber = moment().format("DDDo");
let daylightSave = moment().isDST();
let leapYear = moment().isLeapYear();
let startOfDay = moment().startOf('day');
let difference = moment().diff(startOfDay, 'seconds');

let leapResult;
function leap() {
  if(leapYear === false) {
   leapResult = "isn't";
 } else {
   leapResult = "is";
 }
};

let dlsResult;
function dls() {
  if(daylightSave === false) {
    dlsResult = "isn't";
  } else {
    dlsResult = "is";
    }
};

leap(leapYear);
dls(daylightSave);

console.log("It is " + chalk.blue(date) + ".");
console.log("It is the " + chalk.magenta(dayNumber) + " day of the year.");
console.log("It is " + chalk.green(difference) + " seconds into the day.");
console.log("It " + chalk.green(dlsResult) + " during Daylight Savings Time.");
console.log("It " + chalk.red(leapResult) + " a leap year.");
