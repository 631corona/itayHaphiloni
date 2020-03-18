const cors = require('cors');
const express = require('express');
const soldiersFixture = require('./fixtures/soldiers');
const labsFixture = require('./fixtures/labs');
const cureFoundFixture = require('./fixtures/cureFound');

const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/soldiers', (req, res) => {
    res.status(200).send(soldiersFixture);
});

app.get('/labs', (req, res) => {
    res.status(200).send(labsFixture);
});

app.get('/cure/found', (req, res) => {
    res.status(200).send(cureFoundFixture);
});

app.listen(port, () => console.log(`app listening on port ${port}`));