import React, { Component } from 'react';

import {FaGithubSquare, FaEnvelopeSquare} from 'react-icons/lib/fa';

import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h4>Memo</h4>
        <p>Made with (╯°□°）╯︵ ┻━┻ in Orlando, FL. 🌴</p>
        <div className="icons">
        	<FaGithubSquare />
        	<FaEnvelopeSquare />
        </div>
      </div>
    )
  }
}
