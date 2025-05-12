'use client'

import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const FacebookGroups = dynamic(
  () => import('../../components/facebook-groups'),
  { ssr: false }
);

export default function FacebookGroupsPage() {
  return (
    <div>
      <Head>
        <title>My Facebook Groups</title>
        <meta name="description" content="View your Facebook groups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="title">My Facebook Groups</h1>
        <p className="description">
          Connect with Facebook to see your groups
        </p>

        <FacebookGroups />
      </div>
    </div>
  );
}