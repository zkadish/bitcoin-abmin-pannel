import React from 'react';

import Chart from './Chart';
import ChartSettings from './ChartSettings';

import './ez-chart.scss';

const EzChart = () => (
  <div className="ez-charting">
    <div className="ez-charting__chart">
      <div className="ez-charting__settings">
        <ChartSettings />
      </div>
      <div className="ez-charting__chart--position">
        <Chart />
      </div>
    </div>
  </div>
);

export default EzChart;
