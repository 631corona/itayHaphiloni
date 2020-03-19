const express = require('express');
let router = express.Router();

router.route('/', console.log('nos'));


// app.get('/soldiers', (req, res) => {
//     res.status(200).send(soldiersFixture);
// });

module.exports = router;