import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currenciesThunk } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount = () => {
    const { getCurrenciesList } = this.props;
    getCurrenciesList();
  }

  render() {
    const { currenciesListDis } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="value-input">
            Valor:
            {' '}
            <input
              data-testid="value-input"
              id="value-input"
            />
          </label>
          {'  '}
          <label htmlFor="description-input">
            Descrição:
            {' '}
            <input
              data-testid="description-input"
              id="description-input"
            />
          </label>
          {' '}
          <select data-testid="currency-input">
            Moeda:
            {' '}
            {
              currenciesListDis.map((currency) => (
                <option
                  key={ currency }
                >
                  { currency }
                </option>
              ))
            }
          </select>
          {' '}
          <select data-testid="method-input">
            Modo de Pagamento:
            {' '}
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          {' '}
          <select data-testid="tag-input">
            Área:
            {' '}
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </form>
      </section>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesList: () => dispatch(currenciesThunk()),
});

const mapStateToProps = (state) => ({
  currenciesListDis: state.wallet.currencies,
});

WalletForm.propTypes = {
  currenciesList: PropTypes.arrayOf({}),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
