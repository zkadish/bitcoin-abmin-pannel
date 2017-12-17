import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as action from 'redux/actions/chart';

class ChartSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  setCoin = (e) => {
    console.log(e.target.value);
    this.props.setChartCoin(e.target.value);
  }

  setCurrency = (e) => {
    console.log(e.target.value);
    this.props.setChartCurrency(e.target.value);
  }
 
  render() {
    return (
      <section className="chart-settings">
        <div>
          {/* <label htmlFor="coin">coin:</label> */}
          <select
            onChange={(e) => { this.setCoin(e); }}
            className="coin-type"
            id="coin"
          >
            {this.props.coins.map((c) => {
              return <option key={c} value={c}>{c}</option>;
            })}
          </select>
          {/* <label htmlFor="currency">currency:</label> */}
          <select
            onChange={(e) => { this.setCurrency(e); }}
            className="currency-type"
            id="currency"
            value={this.props.currency}
          >
            {this.props.currencies.map((c) => {
              return <option key={c} value={c}>{c}</option>;
            })}
          </select>
        </div>
      </section>
    );
  }
}

ChartSettings.propTypes = {
  // options: PropTypes.object,
  coins: PropTypes.array,
  currencies: PropTypes.array,
};

export default connect(
  (state) => ({
    coin: state.chartSettings.coin,
    currency: state.chartSettings.currency,
    coins: state.chartSettings.coins,
    currencies: state.chartSettings.currencies || [],
  }),
  (dispatch) => ({
    setChartCoin: (coin) => { dispatch(action.setChartCoin(coin))},
    setChartCurrency: (coin) => { dispatch(action.setChartCurrency(coin))},
  })
)(ChartSettings);
