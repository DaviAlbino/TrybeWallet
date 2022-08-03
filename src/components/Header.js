import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  getTotalSumUpdate = () => {
    const { expensesDis } = this.props;
    const totalSum = expensesDis.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      const { ask } = exchangeRates[currency];
      acc += (Number(value) * Number(ask));
      return acc;
    }, 0);
    return totalSum.toFixed(2);
  }

  render() {
    const { emailDis } = this.props;
    return (
      <header>
        Header
        <h3 data-testid="email-field">{ emailDis }</h3>
        <h4 data-testid="total-field">{ this.getTotalSumUpdate() }</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

Header.propTypes = {
  emailDis: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  emailDis: state.user.email,
  expensesDis: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
