const express = require('express');
const { getSoldiersData } = require('../../../logic/soldiers/soldiersLogic');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(getSoldiersData());
});

module.exports = router;
