import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabledBtn: true,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validadeBtn);
  }

  isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)

  validadeBtn = () => {
    const { email, password } = this.state;
    const SIX = 6;

    if (!this.isValidEmail(email) || password.length < SIX) {
      this.setState({
        disabledBtn: true,
      });
    } else {
      this.setState({
        disabledBtn: false,
      });
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    const { userDispatch, history } = this.props;
    const { email } = this.state;

    userDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { disabledBtn, email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email-input">
            E-mail:
            <input
              name="email"
              value={ email }
              type="email"
              data-testid="email-input"
              id="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              name="password"
              value={ password }
              type="password"
              data-testid="password-input"
              id="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ disabledBtn }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userDispatch: (email) => dispatch(addUser(email)),
});

Login.propTypes = {
  addUser: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
