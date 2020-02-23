const express = require('express')
const app = express()
const port = 3001;      // front-end is 3000

var redis = require("redis"),
    client = redis.createClient();

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/api/stars', async (req, res) => {
    // debug res.send("hello world");
    const stars = await getAsync('stardata');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    console.log("stars ----" + stars);
    return res.send(stars)
})

app.listen(port, () => console.log(`App listening on port ${port}!`))