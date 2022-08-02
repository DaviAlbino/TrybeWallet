// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { NEW_BILL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_BILL:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
