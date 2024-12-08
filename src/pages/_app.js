import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
      {/* <link rel="icon" href="/public/favicon.ico" /> */}
        <title>Saiful Islam - Web Developer</title>
      </Head>
      <Theme>
      <Component {...pageProps} />
      </Theme>
    </>
  );
}
