var CronJob = require('cron').CronJob;
const fetchData = require('./tasks/fetchdata');

console.log("here");
new CronJob('* * * * *', fetchData, null, true, 'America/Los_Angeles');