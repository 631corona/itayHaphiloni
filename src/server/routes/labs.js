const express = require('express');
const { getLabsData } = require('../logic/labs/labsLogic');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(getLabsData())
});

module.exports = router;
