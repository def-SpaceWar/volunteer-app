import "../styles/globals.css";
import Head from "next/head";
import Router from 'next/router';
import { useState } from 'react';
import Loading from './loading';


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState();

  Router.onRouteChangeStart = (url) => {
    setLoading(true)
  };

  Router.onRouteChangeComplete = (url) => {
    let randomTime = Math.floor(Math.random() * 2.734555);
    if (randomTime < 1) {
      randomTime = 1;
    }
    sleep(randomTime * 1000).then(() => {
      setLoading(false)
    })
  };

  Router.onRouteChangeError = (err, url) => {
    console.error(err)

  }; 

  return (
    <div>
      <Head>
        <link rel="icon" href="/hackathon_logo.png" />
        <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
      </Head>
      { loading ? <Loading /> : <Component {...pageProps} /> }
    </div>
  );
}

export default MyApp;
