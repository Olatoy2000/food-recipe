import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
 

  return (
    <>
      <Head>
        <title>Olatoy-meal</title>
        <meta name="description" content="Meal-khuj is a listing website of meal recipe" />
      </Head>

      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
