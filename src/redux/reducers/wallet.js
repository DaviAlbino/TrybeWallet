// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { NEW_BILL, NEW_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_BILL:
    return {
      ...state,
      currencies: action.currencies,
    };
  case NEW_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
