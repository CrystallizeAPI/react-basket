/* eslint react/no-danger: 0  */
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import resetStyle from 'components/style/reset';
import config from '../server/config';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="no">
        <Head>
          <title>Crystallize</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimal-ui"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <script
            dangerouslySetInnerHTML={{
              __html: `__crystallizeConfig={
                "TENANT_ID": "${config.TENANT_ID}",
                "API_URL": "${config.API_URL}"
              }`
            }}
          />
          <style>{resetStyle}</style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
