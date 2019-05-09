import React from 'react';
import { render } from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enBasket from './locales/en/basket.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      basket: enBasket
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

const rootEl = document.getElementById('root');

function renderApp() {
  // eslint-disable-next-line global-require
  const App = require('./app').default;
  render(<App />, rootEl);
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
