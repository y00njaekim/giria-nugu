console.log(`---------------Start app.js---------------`);
const express = require('express');
console.log(`---------------app.js 1---------------`);
const cookieParser = require('cookie-parser');
console.log(`---------------app.js 2---------------`);
const bodyParser = require('body-parser');
console.log(`---------------app.js 3---------------`);
const morgan = require('morgan');

console.log(`---------------app.js 4---------------`);
const {SERVER_PORT} = require('./config.js');
console.log(`---------------app.js 5---------------`);
const routes = require('./routes');
console.log(`---------------app.js 6---------------`);

const app = express();

console.log(`---------------app.js 7---------------`);

app.use(bodyParser.json());
app.use(morgan('common'));
app.use((err, req, res, next) => next());
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on ${SERVER_PORT} port`);
});
