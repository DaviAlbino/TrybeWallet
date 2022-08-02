// Coloque aqui suas actions
import fetchAPI from '../../services/currenciesAPI';

export const NEW_USER = 'NEW_USER';
export const NEW_BILL = 'NEW_BILL';
export const BILL_ERROR = 'BILL_ERROR';

export const addUser = (email) => ({
  type: NEW_USER,
  email,
});

export const addNewBill = (currencies) => ({
  type: NEW_BILL,
  currencies,
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
