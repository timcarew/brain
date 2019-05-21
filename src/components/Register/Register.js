import React, { Component } from 'react';
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onSubmitRegister = () => {
    fetch('https://still-crag-56346.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  }

  render () {
    return (
      <div className="register">
        <div className="register-form">
          <h2 className="register-form-title">Register</h2>
          <div className="register-form-data">
            <div className="register-name">
              <label className="register-name-label">Name</label>
              <input className="register-name-input" type="text" onChange={this.onNameChange} />
            </div>
            <div className="register-email">
              <label className="register-email-label">Email Address</label>
              <input className="register-email-input" type="text" onChange={this.onEmailChange} />
            </div>
            <div className="register-password">
              <label className="register-password-label">Password</label>
              <input className="register-password-input" type="password" onChange={this.onPasswordChange} />
            </div>
            <div className="register-buttons">
              <button type="submit" className="register-buttons-register" onClick={this.onSubmitRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;