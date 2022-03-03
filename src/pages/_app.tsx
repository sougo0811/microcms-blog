import '~/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Footer from '~/components/Footer'
import Header from '~/components/Header'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
