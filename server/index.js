require('dotenv').config();

const express = require('express');
const next = require('next');

const config = require('./config');

const app = next({ dev: config.DEV });
const handle = app.getRequestHandler();

const basketApi = require('../module/server/api');

app.prepare().then(() => {
  const server = express();

  server.use('/basket/', basketApi);

  server.use(handle);

  server.listen(config.PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${config.PORT}`); // eslint-disable-line
  });
});
