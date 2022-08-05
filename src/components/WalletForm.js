import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currenciesThunk, expenseThunk } from '../redux/actions';

const alimentacao = 'Alimentação';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: alimentacao,
  }

  componentDidMount = () => {
    const { getCurrenciesList } = this.props;
    getCurrenciesList();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { id } = this.state;
    const { expensesList } = this.props;

    await expensesList(this.state);

    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    });
  }

  render() {
    const {
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;
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
              value={ value }
              name="value"
              onChange={ this.handleChange }
            />
          </label>
          {'  '}
          <label htmlFor="description-input">
            Descrição:
            {' '}
            <input
              data-testid="description-input"
              id="description-input"
              value={ description }
              name="description"
              onChange={ this.handleChange }
            />
          </label>
          {' '}
          <select
            data-testid="currency-input"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            Moeda:
            {' '}
            {
              currenciesListDis.map((currencyAbroad) => (
                <option
                  key={ currencyAbroad }
                >
                  { currencyAbroad }
                </option>
              ))
            }
          </select>
          {' '}
          <select
            data-testid="method-input"
            value={ method }
            name="method"
            onChange={ this.handleChange }
          >
            Modo de Pagamento:
            {' '}
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          {' '}
          <select
            data-testid="tag-input"
            value={ tag }
            name="tag"
            onChange={ this.handleChange }
          >
            Área:
            {' '}
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </form>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </section>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesList: () => dispatch(currenciesThunk()),
  expensesList: (inputs) => dispatch(expenseThunk(inputs)),
});

const mapStateToProps = (state) => ({
  currenciesListDis: state.wallet.currencies,
  expensesListDis: state.wallet.expenses,
});

WalletForm.propTypes = {
  currenciesList: PropTypes.arrayOf({}),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
