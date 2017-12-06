import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import Input from "../Input/Input";
import Select from "../Select/Select";
import { required, nonEmpty, isTrimmed } from "../validators.js";

import './ManualEntryForm.css';

// How to populate the topic and link fields from state? connect not working, cant map state to props.

export class ManualEntryForm extends Component {
  render() {
    return (
    	<form
        className="manual-entry-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <Field component={Select} name="topic" options={['ReactJS', 'NodeJS']} validate={required} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time Spent</label>
          <Field component={Input} type="text" name="time" validate={[required, nonEmpty, isTrimmed]} />
        </div>
        <div className="form-group">
          <label htmlFor="link">Link to Article/Video</label>
          <Field component={Input} type="text" name="link" validate={[required, isTrimmed]} />
        </div>
        <div className="form-group">
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
	form: "manual-submit",
	onSubmitFail: (errors, dispatch) => console.log(errors)
})(ManualEntryForm);
