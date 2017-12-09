import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RegisterForm from "../RegisterForm/RegisterForm";
import "./Register.css";

class Register extends Component {

  render() {
    if(this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="register">
        <Header />
        <section className="register-area">
          <div className="inner-wrapper">
            <div className="register-group">
              <div className="register-header">
                <h1>Register for Memo</h1>
                <span>Enter a username and password to sign up for memo!</span>
              </div>
          	  <RegisterForm />
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

export default connect(mapStateToProps)(Register);
