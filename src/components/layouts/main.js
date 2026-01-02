import Head from 'next/head'
import Footer from '../footer'
import NavBar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <main className="pb-8">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Koki's homepage" />
        <meta name="author" content="Koki Nakagawa" />
        <meta name="author" content="craftzdog" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Koki Nakagawa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Koki Nakagawa" />
        <meta name="og:title" content="Koki Nakagawa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Koki Nakagawa Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <div className="max-w-3xl mx-auto pt-14 px-4">
        {children}

        <Footer />
      </div>
    </main>
  )
}

export default Main
