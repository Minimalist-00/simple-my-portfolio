import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'

import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import '../styles/globals.css'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Suppress fetchPriority warning in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error
  console.error = (...args) => {
    if (
      args.some(arg => typeof arg === 'string' && arg.includes('fetchPriority'))
    ) {
      return
    }
    originalError.apply(console, args)
  }
}

function Website({ Component, pageProps, router }) {
  return (
    <>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Analytics />
      </Layout>
    </>
  )
}

export default appWithTranslation(Website)
