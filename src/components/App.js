import React from 'react';
import { connect } from 'react-redux';

import Chart from './Chart';
import ChartSettings from './ChartSettings';

function App() {
  return (
    <div className="mw-container">
      <header className="mw-header">
        <h2>MineWiser Dashboard</h2>
      </header>
      <main className="mw-main">
        <div className="chart-watchlist-container">
          <div className="stock-chart-container">
            <div className="stock-chart-settings">
              <div style={{ position: 'absolute', left: '20px' }}>
                chart settings
              </div>
              <ChartSettings />
            </div>
            <div className="stock-chart">
              <Chart />
            </div>
          </div>
          <div className="watch-list">
            watch list
          </div>
        </div>
        <section style={{ display: 'flex' }}>
          <div className="estimated-profit">
            profits
          </div>
          <div className="total-nodes">
            active nodes
          </div>
          <div className="total-hashrate">
            total hashrate
          </div>
          <div className="weather-info">
            weather
          </div>
        </section>
      </main>
      <footer className="mw-footer">
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
