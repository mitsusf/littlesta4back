var fetch = require('node-fetch');
var redis = require("redis"),
    client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);
const getAsync = promisify(client.get).bind(client);

const baseURL = 'https://jsonplaceholder.typicode.com/users';

async function fetchData() {
    console.log('fetching data')

    let resultCount = 1, onPage = 0;
    const allJobs = [];

        const res = await fetch(`${baseURL}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log(allJobs);

    // set in redis
    const success = await setAsync('stardata', JSON.stringify(allJobs));
    console.log({success});
}

//fetchData();

module.exports =  fetchData;