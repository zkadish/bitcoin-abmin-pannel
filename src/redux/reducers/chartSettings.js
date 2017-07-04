const settings = {
  options: {},
  coin: '',
  currency: '',
  coins: [],
  currencies: [],
};

function ChartSettings(state = settings, action) {
  switch (action.type) {
    case 'SET_CHART_COIN': {
      return {
        ...state,
        options: { ...state.options, coin: action.coin },
        coin: action.coin,
      };
    }
    case 'SET_CHART_CURRENCY': {
      return {
        ...state,
        options: { ...state.options, currency: action.currency },
        currency: action.currency,
      };
    }
    case 'SET_CHART_OPTIONS':
      return {
        ...state,
        options: action.options,
        coin: action.options.coin,
        currency: action.options.currency,
        coins: action.options.list.coins,
        currencies: action.options.list.currencies,
      };
    default:
      return state;
  }
}

export default ChartSettings;

