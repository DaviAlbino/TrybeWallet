// Coloque aqui suas actions
import fetchAPI from '../../services/currenciesAPI';

export const NEW_USER = 'NEW_USER';
export const NEW_BILL = 'NEW_BILL';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const BILL_ERROR = 'BILL_ERROR';

export const addUser = (email) => ({
  type: NEW_USER,
  email,
});

export const addNewBill = (currencies) => ({
  type: NEW_BILL,
  currencies,
});

export const addNewExpense = (expenses) => ({
  type: NEW_EXPENSE,
  expenses,
});

export const addNewError = (error) => ({
  type: BILL_ERROR,
  error,
});

export function currenciesThunk() {
  return async (dispatch) => {
    try {
      const currencies = await fetchAPI();
      const currenciesList = Object.keys(currencies)
        .filter((currency) => currency !== 'USDT');
      dispatch(addNewBill(currenciesList));
    } catch (error) {
      dispatch(addNewError(error));
    }
  };
}

export const expenseThunk = (inputs) => async (dispatch) => {
  try {
    const data = await fetchAPI();
    const exchangeRates = await data;
    const newData = { ...inputs, exchangeRates };
    console.log(newData);
    dispatch(addNewExpense(newData));
  } catch (error) {
    dispatch(addNewError(error));
  }
};
