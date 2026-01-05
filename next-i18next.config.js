const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en']
  },
  localePath: path.resolve('./src/data/content'),
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}
