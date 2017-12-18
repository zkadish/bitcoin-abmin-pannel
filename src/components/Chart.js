import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from 'js/stock-chart';

import * as action from 'redux/actions/chart';

class StockChart extends React.Component {
  constructor(props) {
    super(props);

    this.chart = null;
  }

  componentDidMount() {
    this.chart = new Chart();
    this.chart.init();
    this.chart.coins().then((coins) => {
      console.log('coin list:', coins);
      const coinList = coins.map(c => c.Symbol);
      this.props.setCoinsList(coinList);
    });
    this.props.setChartOptons(this.chart.options);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.getOwnPropertyNames(this.props.options).length === 0) return;
    if (JSON.stringify(nextProps.options) !== JSON.stringify(this.props.options)) {
      this.chart.onStop();
      this.chart.update(nextProps.options);
    }
  }

  render() {
    return (
      <div className="canvas-container">
        <div className="resize-container">
          <div className="stockchart-container">
            <canvas className="chart-canvas" />
          </div>
          <div className="yaxis-container">
            <canvas className="yaxis-canvas" />
          </div>
          <div className="xaxis-container">
            <canvas className="xaxis-canvas" />
          </div>
        </div>
      </div>
    );
  }
}

StockChart.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  setChartOptons: PropTypes.func,
  setCoinsList: PropTypes.func,
};

export default connect(
  state => ({
    options: state.chartSettings.options,
  }),
  dispatch => ({
    setChartOptons: (options) => { dispatch(action.setChartOptions(options)); },
    setCoinsList: (list) => { dispatch(action.setCoinList(list)); },
  }),
)(StockChart);
