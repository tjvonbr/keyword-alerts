'use client'

import Script from 'next/script';
import { useEffect } from 'react';

function FacebookSDK() {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1775246439684951',
        cookie: true,
        xfbml: true,
        version: 'v19.0'
      });
    };
  }, [])

  return (
    <Script
      id="facebook-jssdk"
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      async
      defer
      crossOrigin="anonymous"
    />
  )
};

export default FacebookSDK;