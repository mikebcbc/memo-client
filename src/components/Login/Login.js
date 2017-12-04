import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

class Login extends Component {

  render() {
    if(this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="login-header">
          <h3>Login to Memo</h3>
          <span>Enter a username and password to log on!</span>
        </div>
      	<LoginForm />
        <span className="register">Not a member yet? <Link to="/register">Register</Link> FREE today!</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(Login);
