import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'
import SwipeScreen from '../components/swipeScreen'

const Relax = () => (
  <div className="relax">
    <Head>
      <title>Relax</title>
      <meta name="description" content="Relax and de-stress with meditation sessions."></meta>
      <meta name="theme-color" content="#26A8E2" />
      <link rel="icon" href="public/logo.png" />
      <link rel="apple-touch-icon" href="public/logo.png"></link>
      <link rel="manifest" href="manifest.webmanifest" />
    </Head>

    <NormalNav>
      Meditation
    </NormalNav>

    <Content>
      <h1>Stressed out?</h1>
      <p>Relax with meditation audios from Mr Colonel.</p>
      <br />

      <div className="swipe">
        <SwipeScreen />
      </div>

    </Content>

    <style jsx>{`

      .relax {
        background: #42c8f5;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        font-family: Avenir Next, sans-serif;
      }

      .swipe {
        margin: 0 auto;
        width: 85vw;
        height: 500px
      }
      
    `}</style>
  </div>
)

export default Relax