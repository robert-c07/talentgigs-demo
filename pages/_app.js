import '../public/assets/css/app.2afad0c.bundle.css'
import "../public/assets/css/swiper-custom.css";
import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Preloader from '../components/elements/Preloader';
import 'react-modal-video/css/modal-video.css';
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <Head>
          <title>Talentgigs | Providing Digital Medium Recruitment solutions | Enabling Start-Ups, MNCs, SMEs, and Enterprises to hire resources Quickly</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Preloader />
      )}

    </>
  )
}

export default MyApp
