const express = require('express');
const { getCureData } = require('../logic/cure/cureLogic');

const router = express.Router();

router.get('/found', (req, res) => {
    res.send(getCureData());
});

module.exports = router;
