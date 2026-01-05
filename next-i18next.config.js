const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en']
  },
  localePath: path.resolve('./src/data/content/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}
