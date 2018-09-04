import i18n from 'i18next';

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
export default ({ files, lang }) =>
  i18n.init({
    lng: lang, // active language http://i18next.com/translate/
    fallbackLng: 'en',
    resources: files,
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    interpolation: {
      format: (value, format) => {
        switch (format) {
          case 'uppercase':
            return value.toUpperCase();
          case 'lowercase':
            return value.toLowerCase();
          default:
            return value;
        }
      }
    }
  });
