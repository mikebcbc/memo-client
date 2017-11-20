import React, { Component } from 'react';

import RecContent from '../RecContent/RecContent';
import CompletedContent from '../CompletedContent/CompletedContent';

export default class Content extends Component {
  render() {
    return (
      <section className="content">
      	<div className="inner-wrapper">
      		<RecContent />
      		<CompletedContent />
      	</div>
      </section>
    )
  }
}
