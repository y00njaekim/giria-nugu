console.log(`---------------Start /routes/Index.js---------------`);
const express = require('express');
console.log(`---------------/routes/Index.js 1---------------`);
const nugu = require('../nugu');
console.log(`---------------/routes/Index.js 2---------------`);
const router = express.Router();
console.log(`---------------/routes/Index.js 3---------------`);

router.post(`/nugu/answer.phonenumber`, nugu);
console.log(`---------------/routes/Index.js 4---------------`);
module.exports = router;
console.log(`---------------/routes/Index.js End---------------`);
