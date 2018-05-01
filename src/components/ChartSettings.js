import React from 'react';
import { func, string, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import FontAweIcon from './FontAweIcon';
import Select from './inputs/Select';
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
        <Select
          id="coin"
          value={coin}
          onChange={setCoin}
          options={coins}
        />
        <Select
          id="currency"
          value={currency}
          onChange={setCurrency}
          options={currencies}
        />
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
