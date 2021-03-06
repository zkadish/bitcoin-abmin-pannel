const SetChartOptions = 'SET_CHART_OPTIONS';
const SetChartCoin = 'SET_CHART_COIN';
const SetChartCurrency = 'SET_CHART_CURRENCY';
const SetCoinList = 'SET_COIN_LIST';

export function setCoinList(list) {
  return {
    type: SetCoinList,
    list,
  };
}

export function setChartOptions(options) {
  return {
    type: SetChartOptions,
    options,
  };
}

export function setChartCoin(coin) {
  return {
    type: SetChartCoin,
    coin,
  };
}

export function setChartCurrency(currency) {
  return {
    type: SetChartCurrency,
    currency,
  };
}
