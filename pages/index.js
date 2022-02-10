import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Danielle testing Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Danielle testing Netlify" />
        <p className="description">
          This is the index page.
        </p>
      </main>

      <Footer />
    </div>
  )
}
