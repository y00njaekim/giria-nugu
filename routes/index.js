const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

console.log(`---------------routes/index.js---------------`);

router.post(`/nugu/answer.phonenumber`, nugu);

module.exports = router;
