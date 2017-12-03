import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import Input from "../Input/Input";
import Select from "../Select/Select";
import { required, nonEmpty, isTrimmed } from "../validators.js";

import './ManualEntryForm.css';

export class ManualEntryForm extends Component {
  render() {
    return (
    	<form
        className="manual-entry-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="topic">Topic</label>
        <Field component={Select} name="topic" options={['turkey', 'chicken']} validate={required} />
        <label htmlFor="time">Time Spent</label>
        <Field
          component={Input}
          type="text"
          name="time"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="link">Link to Article/Video</label>
        <Field
          component={Input}
          type="text"
          name="link"
          validate={[required, isTrimmed]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </button>
      </form>
    )
  }
}

export default reduxForm({
	form: "manual-submit",
	onSubmitFail: (errors, dispatch) => console.log(errors)
})(ManualEntryForm);
