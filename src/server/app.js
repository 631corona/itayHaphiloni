const cors = require('cors');
const express = require('express');
const soldiers = require('./routes/soldiers');
const labs = require('./routes/labs');
const cure = require('./routes/cure');

const app = express();
const port = 3000;

app.use(cors());

app.use('/soldiers', soldiers);
app.use('/labs', labs);
app.use('/cure', cure);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`app listening on port ${port}`));