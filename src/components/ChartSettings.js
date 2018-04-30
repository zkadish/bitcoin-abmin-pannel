import React from 'react';
import { func, string, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import short from 'short-uuid';

import FontAweIcon from './FontAweIcon';
import * as action from '../redux/actions/chart';

const ChartSettings = ({
  coin,
  coins,
  currency,
  currencies,
  setChartCoin,
  setChartCurrency,
}) => {
  const setCoin = (e) => {
    setChartCoin(e.target.value);
  };

  const setCurrency = (e) => {
    setChartCurrency(e.target.value);
  };

  return (
    <section className="settings">
      <FontAweIcon
        name="fa-cog"
        size="fa-2x"
      />
      <FontAweIcon
        name="fa-sync"
        size="size"
      />
      <div className="settings__coin-type">
        <select
          onChange={e => setCoin(e)}
          id="coin"
          value={coin}
        >
          {coins.map(c => (
            <option
              key={short.uuid()}
              value={c}
            >
              {c}
            </option>
          ))}
        </select>
        <select
          onChange={e => setCurrency(e)}
          className="currency-type"
          id="currency"
          value={currency}
        >
          {currencies.map(c => (
            <option
              key={short.uuid()}
              value={c}
            >
              {c}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

ChartSettings.propTypes = {
  setChartCoin: func.isRequired,
  setChartCurrency: func.isRequired,
  coin: string.isRequired,
  currency: string.isRequired,
  coins: arrayOf(string).isRequired,
  currencies: arrayOf(string).isRequired,
};

export default connect(
  state => ({
    coin: state.chartSettings.coin,
    currency: state.chartSettings.currency,
    coins: state.chartSettings.coins,
    currencies: state.chartSettings.currencies || [],
  }),
  dispatch => ({
    setChartCoin: coin => dispatch(action.setChartCoin(coin)),
    setChartCurrency: currency => dispatch(action.setChartCurrency(currency)),
  }),
)(ChartSettings);
