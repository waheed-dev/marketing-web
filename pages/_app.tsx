import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div>
          <Head>
              <link rel="shortcut icon" href="/favicon.png" />
          </Head>
          <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </div>
  )

}

export default MyApp
