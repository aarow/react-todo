var moment = require('moment');

console.log(moment().format('MM-DD-YYYY @ h:mm a'));

var now = moment();

console.log('current timestamp', now.unix());

var timestamp = 1483544840;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format());

console.log(currentMoment.format('MMMM Do, YYYY @ h:mm A'));
