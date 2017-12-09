import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

class Login extends Component {

  render() {
    if(this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <Header />
        <section className="login-area">
          <div className="inner-wrapper">
            <div className="login-group">
              <div className="login-header">
                <h1>Login to Memo</h1>
                <span>Enter a username and password to log on!</span>
              </div>
          	  <LoginForm />
              <span className="register-blurb">Not a member yet? <Link to="/register">Register</Link> FREE today!</span>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.memo.authToken !== null
});

export default connect(mapStateToProps)(Login);
