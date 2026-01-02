const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net'
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com'
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Suppress fetchPriority warning in development
    if (dev && !isServer) {
      const originalWarn = console.warn
      console.warn = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('fetchPriority')) {
          return
        }
        originalWarn.apply(console, args)
      }
    }
    return config
  }
}
