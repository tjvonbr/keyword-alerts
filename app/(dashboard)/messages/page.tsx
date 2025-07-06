import Head from "next/head";
import React from "react";

export default function MessagesPage() {
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
      </div>
    </div>
  );
}