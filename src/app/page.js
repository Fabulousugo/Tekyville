import Head from "next/head";
import React from "react";
import Nav from "../../components/Nav";
import {Content} from "../../components/Content";
import Footer from "../../components/Footer";
import {About}  from "../../components/About";
import { Header } from "../../components/Header";
import { Features } from "../../components/Feature";
import { Step } from "../../components/Step";
import { Faq } from "../../components/Faq";
import { Team } from "../../components/Team";
import { Content2 } from "../../components/Content2";


export default function Home() {

return (
  <div style={{backgroundColor: '#000033', color:'#00BFFF',minHeight: '100vh'}}>
    <div >
      <Head>
        <title>Teckyvil</title>
        <meta name="A tech company" content="home page" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav/>
      <Header/>
      <Features/>
      <Content/>
      <Content2/>
      <Step/>
      <About/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
    </div>
  );
}