console.log(`---------------Start /routes/nugu.js---------------`);
console.log(`---------------/routes/nugu.js 1---------------`);

const express = require('express');
console.log(`---------------/routes/nugu.js 2---------------`);
const npkRequest = require('../nugu');
console.log(`---------------/routes/nugu.js 3---------------`);
const {json} = require('../http');
console.log(`---------------/routes/nugu.js 4---------------`);
const router = express.Router();

console.log(`---------------/routes/nugu.js 5---------------`);
router.post('/', json(npkRequest));

console.log(`---------------/routes/nugu.js 6---------------`);
module.exports = router;
console.log(`---------------/routes/nugu.js 7---------------`);
