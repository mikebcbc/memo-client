import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

import Input from "../Input/Input";
import Select from "../Select/Select";
import { required, nonEmpty, isTrimmed, isNumber } from "../validators.js";

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
          <label htmlFor="link">Content</label>
          <Field component={Select} name="topic" options={['this one', 'that one']} validate={required} />
        </div>
        <div className="form-group completed">
          <label htmlFor="completed">Is the content completed?</label>
          <Field name="completed" component={Input} type="radio" value="no"/> <p>No</p>
          <Field name="completed" component={Input} type="radio" value="yes"/> <p>Yes</p>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time Spent</label>
          <Field component={Input} type="text" name="time" validate={[required, nonEmpty, isTrimmed, isNumber]} />
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
