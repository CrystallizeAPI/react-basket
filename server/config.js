/* eslint no-underscore-dangle: "off" */
const {
  NODE_ENV = 'development',
  PORT = 3000,
  TENANT_ID = 'demo',
  GTM_ID,
  CRYSTALLIZE_API_URL
} = process.env;

const DEV = NODE_ENV !== 'production';

global.__crystallizeConfig = {
  NODE_ENV,
  PORT: parseInt(PORT, 10),
  TENANT_ID,
  GTM_ID,
  DEV,
  API_URL: CRYSTALLIZE_API_URL
};

module.exports = global.__crystallizeConfig;
