import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Chat from './Chat';
import EzChart from './EzChart';
import WatchList from './WatchList';
import HeadLines from './widgets/HeadLines';
import Profit from './widgets/Profit';
import Workers from './widgets/Workers';
import HashRate from './widgets/HashRate';
import Weather from './widgets/Weather';
import Notes from './widgets/Notes';
import Alerts from './widgets/Alerts';
import Footer from './Footer';

function App() {
  return (
    <div className="ez-miner">
      <Header />
      <main className="ez-miner__main">
        <Chat />
        <section className="ez-miner__analytics">
          <EzChart />
          <div className="ez-analytics">
            <HeadLines />
            <Profit />
            <Workers />
            <HashRate />
            <Weather />
            <Notes />
            <Alerts />
          </div>
        </section>
        <WatchList />
      </main>
      <Footer />
    </div>
  );
}

export default connect()(App);
