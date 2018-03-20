const Bounce = require('bounce');
const { Router } = require('express');

const { TENANT_ID, API_TOKEN, SERVER_URL } = process.env;

const router = new Router();

async function doFetch(url, { body, method = 'get', headers = {} } = {}) {
  let stringifiedBody;

  if (body) {
    stringifiedBody = typeof body === 'string' ? body : JSON.stringify(body);
  }

  try {
    const request = await fetch(SERVER_URL + url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Crystallize-Tenant': TENANT_ID,
        'X-Crystallize-Token': API_TOKEN,
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

router.route('/validate-basket').post(async (req, res) => {
  try {
    const validation = await doFetch('/products/validate', {
      method: 'post',
      body: req.body
    });

    return res.json(validation);
  } catch (error) {
    Bounce.rethrow(error, 'system');
    console.error(error);
  }

  return res.json({
    status: 'INVALID',
    serverError: 'true'
  });
});

module.exports = router;
