import React, { Component } from 'react';
import "./Signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onSubmitSignIn = () => {
    fetch('https://still-crag-56346.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
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

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="signin">
        <div className="signin-form">
          <h2 className="signin-title">Sign In</h2>
          <div className="signin-form-data">
            <div className="signin-email">
              <label className="signin-email-label">Email Address</label>
              <input className="signin-email-input" type="text" onChange={this.onEmailChange} />
            </div>
            <div className="signin-password">
              <label className="signin-password-label">Password</label>
              <input className="signin-password-input" type="password" onChange={this.onPasswordChange} />
            </div>
            <div className="signin-buttons">
              <button type="submit" className="signin-buttons-signin" onClick={this.onSubmitSignIn}>Sign In</button>
              <button type="button" className="signin-buttons-register" onClick={() => onRouteChange('register')}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;