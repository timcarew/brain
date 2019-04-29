import React from 'react';
import "./Navigation.css";
import logo from "./chip.svg";

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
      <nav className="nav">
        <img className="logo" src={logo} alt="Brain Logo" />
        <p className="nav-button nav-button_signout" onClick={() => onRouteChange('signout')}>Sign Out</p>
      </nav>
    );
    }
  else {
    return (
      <nav className="nav">
        <img className="logo" src={logo} alt="Brain Logo" />
        <div className="nav-button-group">
        <p className="nav-button nav-button_signin" onClick={() => onRouteChange('signin')}>Sign In</p>
        <p className="nav-button nav-button_register" onClick={() => onRouteChange('register')}>Register</p>
        </div>
      </nav>
    );
  }
}

export default Navigation;