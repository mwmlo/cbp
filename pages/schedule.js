import React from 'react'
import Head from 'next/head'
import NormalNav from '../components/normal-nav'
import Content from '../components/content'
import Timer from '../components/timer'
import { useState } from 'react';

const Schedule = () => {

  return(
    <div className="schedule">
      <Head>
        <title>Schedule</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NormalNav>
        <h1>Schedule</h1>
      </NormalNav>

      <Content>
        <h1>Pomodoro Timer</h1>
        <h3>Find it hard to stop procrastinating? Try the Pomodoro Timer Technique.</h3>

        <Timer />

        <div className="instructions">
          <p>
            <ol>
              <li>Choose a task to be accomplished.</li>
              <li>Press play and work for 25 minutes.</li>
              <li>Take a 5 minute break when the timer ends.</li>
              <li>Start again!</li>
            </ol>
          </p>
        </div>

      </Content>

      <style jsx>{`

        .schedule {
          background: #f56942;
          width: 100vw;
          height: 100%;
          margin: 0 auto;
          font-family: Avenir Next, sans-serif;
        }

        h3 {
          font-size: 20px;
          font-weight: normal;
        }

        .instructions {
          background: whitesmoke;
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 3vh;
        }

        li {
          font-size: 15px;
          margin-bottom: 5px;
        }
        
      `}</style>
    </div>
  )
}

export default Schedule