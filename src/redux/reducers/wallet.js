// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { NEW_BILL, NEW_EXPENSE, DEL_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const newExpsenseList = [...state.expenses];
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
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: newExpsenseList.filter((expense) => expense.id !== action.del.id),
    };
  default:
    return state;
  }
};

export default wallet;
