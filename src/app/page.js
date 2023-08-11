import Head from "next/head";
import React from "react";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Footer from "../../components/Footer";


export default function Home() {

return (
    <div>
      <Head>
        <title>Teckyvil</title>
        <meta name="A tech company" content="home page" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}