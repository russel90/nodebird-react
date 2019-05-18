import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Create = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js" />
      </Head>
      <AppLayout>
        <div>유저를 만들어 봅시다.</div>
      </AppLayout>
    </>
  );
};

export default Create;
