/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Script from 'next/script';
import React from 'react';
import { useEffect } from 'react';

function FacebookSDK() {
  useEffect(() => {
    (window as any).fbAsyncInit = function() {
      (window as any).FB.init({
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