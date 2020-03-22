const cors = require('cors');
const express = require('express');
const path = require('path');
const api = require('./routes/api');

const app = express();
const port = 3000;

app.use(cors()); // remove

app.use('/api', api);

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`app listening on port ${port}`));