import '../styles/globals.css'
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <meta name="google-site-verification" content="nIfz5eFECnlwo-uBe0hf7ia_zG8Bmgm-sDtDg8jWRek" />
    </Head>
    <script async src="https://cdn.splitbee.io/sb.js"/>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" />
    <Component {...pageProps} />
  </div>
   )
}

export default MyApp
