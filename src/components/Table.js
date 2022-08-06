import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expensesDis } = this.props;
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          <tbody>
            { expensesDis.map((expense) => (
              <tr key={ expense.description }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ (Number(expense.value)).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                <td>
                  {(Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
                </td>
                <td>
                  {
                    (Number(expense.exchangeRates[expense.currency].ask)
                  * Number(expense.value)).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expensesDis: PropTypes.arrayOf(
    PropTypes.string,
  ),
}.isRequired;

const mapStateToProps = (state) => ({
  expensesDis: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
