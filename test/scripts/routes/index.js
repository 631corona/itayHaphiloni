const express = require('express');
const router = express.Router();

router.get('/soldiers', (res, res) => {
    res.render('test', { output: 'testrender' })
})

module.exports = router;