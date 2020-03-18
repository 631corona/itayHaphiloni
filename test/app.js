const http = require('http');
const express = require('express');
const soldiersFixture = require('./fixtures/soldiers');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/soldiers', (req, res) => {
    res.send(soldiersFixture);
});

app.listen(port, () => console.log(`app listening on port ${port}`));