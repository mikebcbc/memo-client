import React, { Component } from 'react';

import ManualEntryForm from '../ManualEntryForm/ManualEntryForm';

import './ManualEntry.css';

export default class ManualEntry extends Component {
  render() {
    return (
      <section className="manual-entry">
        <div className="inner-wrapper">
          <div class="info">
  				  <h3>Submit a manual entry</h3>
  				  <p>Not using our handy <a href>chrome extension</a>? Not a problem. Feel free to manually submit an entry here to incorporate it into your statistics!</p>
			    </div>
			    <div class="manual-form">
				    <ManualEntryForm />
			    </div>
        </div>
      </section>
    )
  }
}
