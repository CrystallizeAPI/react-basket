import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { getTranslation } from './i18n/helpers';
import startI18n from './i18n/start';

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

function determineStaticUrl({ req }) {
  if (req) {
    return `${req.protocol}://${req.get('host')}/static/locales/`;
  }
  const l = window.location;
  return `${l.protocol}//${l.host}/static/locales/`;
}

export default ComposedComponent => {
  const lang = 'en';

  return class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(
      ComposedComponent
    )})`;

    static async getInitialProps(ctx) {
      // Get translations
      const translations = await getTranslation({
        lang,
        files: ['common', 'basket', ...(ComposedComponent.l18namespaces || [])],
        baseUrl: determineStaticUrl(ctx)
      });

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      const router = {
        asPath: ctx.asPath,
        pathname: ctx.pathname,
        query: ctx.query
      };

      // Pass the router down to the composed props
      if (!composedInitialProps.router) {
        composedInitialProps.router = router;
      }

      return {
        translations,
        ...composedInitialProps
      };
    }

    constructor(props) {
      super(props);

      this.i18n = startI18n(props.translations, lang);
    }

    render() {
      return (
        <I18nextProvider
          i18n={this.i18n}
          initialLanguage={lang}
          initialI18nStore={this.props.translations}
        >
          <ComposedComponent {...this.props} />
        </I18nextProvider>
      );
    }
  };
};
