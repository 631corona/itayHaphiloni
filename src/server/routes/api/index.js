const express = require('express');
const cure = require('./cure');
const labs = require('./labs');
const soldiers = require('./soldiers');

const router = express.Router();

router.get('/', (req, res) => { res.send('welcome to my site!!!') });

router.use('/cure', cure);
router.use('/labs', labs);
router.use('/soldiers', soldiers);

module.exports = router;
