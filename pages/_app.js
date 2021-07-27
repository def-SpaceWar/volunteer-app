import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/hackathon_logo.png" />
        <meta name="description" content="Post & Join Volunteer groups! Helping is happiness!" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
