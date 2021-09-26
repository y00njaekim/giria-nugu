const express = require('express');
const npkRequest = require('../nugu');
const { json } = require('../http');
const router = express.Router();

console.log(`---------------routes/nugu.js---------------`);
router.post('/', json(npkRequest));

module.exports = router;
