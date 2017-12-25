import React from 'react';
import { connect } from 'react-redux';

import Chart from './Chart';
import ChartSettings from './ChartSettings';

function App() {
  return (
    <div className="ez-miner">
      <header className="ez-miner__header">
        <i className="fas fa-cube fa-2x" />
        <h2 className="ez-miner__header--size">
          EZ Miner Dashboard
        </h2>
      </header>
      <main className="ez-miner__main">
        <section className="ez-chat">
          <header className="ez-chat__header">
            <i className="far fa-comment-alt fa-2x" />
            Chat
          </header>
        </section>
        <section className="ez-miner__analytics">
          <div className="ez-charting">
            <div className="ez-charting__chart">
              <div className="ez-charting__settings">
                <ChartSettings />
              </div>
              <div className="ez-charting__chart--position">
                <Chart />
              </div>
            </div>
            <div className="watch-list">
              <header className="watch-list__header">
                <i className="far fa-list-alt fa-2x" />
                Watch List
              </header>
            </div>
          </div>
          <div className="ez-analytics">
            <div className="head-lines">
              <header className="head-lines__header">
                <i className="fas fa-newspaper fa-2x" />
                Head Lines
              </header>
            </div>
            <div className="profit">
              <header className="profit__header">
                <i className="fas fa-dollar-sign fa-2x" />
                Profits
              </header>
            </div>
            <div className="workers">
              <header className="workers__header">
                <i className="fas fa-cubes fa-2x" />
                Workers
              </header>
            </div>
            <div className="hash-rate">
              <header className="hash-rate__header">
                <i className="fas fa-hashtag fa-2x" />
                Hash Rate
              </header>
            </div>
            <div className="weather">
              <header className="weather__header">
                <i className="fas fa-cloud fa-2x" />
                Weather
              </header>
            </div>
          </div>
        </section>
      </main>
      <footer className="ez-miner__footer">
        <a
          className="powered-by-link"
          href="https://www.cryptocompare.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by cryptocompare
        </a>
      </footer>
    </div>
  );
}

export default connect()(App);
