const fetch = require('node-fetch');
const Bounce = require('bounce');
const { Router } = require('express');
const bodyParser = require('body-parser');

const {
  CRYSTALLIZE_TENANT_ID,
  CRYSTALLIZE_API_URL,
  CRYSTALLIZE_API_TOKEN
} = process.env;

const router = new Router();
const jsonParser = bodyParser.json();

async function doFetch(url, { body, method = 'get', headers = {} } = {}) {
  let stringifiedBody;

  if (body) {
    stringifiedBody = typeof body === 'string' ? body : JSON.stringify(body);
  }

  try {
    const request = await fetch(CRYSTALLIZE_API_URL + url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Crystallize-Tenant': CRYSTALLIZE_TENANT_ID,
        'X-Crystallize-Token': CRYSTALLIZE_API_TOKEN,
        ...headers
      },
      body: stringifiedBody
    });

    return request.json();
  } catch (error) {
    Bounce.rethrow(error, 'system');
    console.error(error);
    return {};
  }
}

router.route('/').get((req, res) => res.json({ message: 'Welcome' }));

router.route('/validate').post(jsonParser, async (req, res) => {
  try {
    const validation = await doFetch('/v2/products/validate', {
      method: 'post',
      body: req.body
    });

    return res.json(validation);
  } catch (error) {
    Bounce.rethrow(error, 'system');
  }

  return res.json({
    status: 'INVALID'
  });
});

module.exports = router;
