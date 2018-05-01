import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from '../js/stock-chart';

import * as action from '../redux/actions/chart';

class StockChart extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
  }

  componentDidMount() {
    this.chart = new Chart();
    this.chart.init();
    this.chart.coins().then((coins) => {
      const coinList = coins.map(c => c.Symbol);
      this.props.setCoinsList(coinList);
    });
    this.props.setChartOptions(this.chart.options);
  }

  componentWillReceiveProps(nextProps) {
    // if options is an empty obj?
    if (Object.getOwnPropertyNames(this.props.options).length === 0) return;
    // update if options change
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
  ]).isRequired,
  setChartOptions: PropTypes.func.isRequired,
  setCoinsList: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    options: state.chartSettings.options,
  }),
  dispatch => ({
    setChartOptions: (options) => { dispatch(action.setChartOptions(options)); },
    setCoinsList: (list) => { dispatch(action.setCoinList(list)); },
  }),
)(StockChart);
