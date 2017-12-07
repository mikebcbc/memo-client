import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';

import {updateDisplayed} from '../../actions';

import Input from "../Input/Input";
import Select from "../Select/Select";
import { required, nonEmpty, isTrimmed, isNumber } from "../validators.js";

import './ManualEntryForm.css';

export class ManualEntryForm extends Component {

  constructor(props) {
    super(props);
    this.updateDisplayed = this.updateDisplayed.bind(this);
  }
  
  updateDisplayed(e) {
    this.props.dispatch(updateDisplayed(e.target.value));
  }

  render() {
    const topics = this.props.topics.map((topic) => {
      return topic;
    });

    const content = this.props.content.map((content) => {
      return content.title;
    })

    return (
    	<form
        className="manual-entry-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <Field component={Select} name="topic" options={topics} validate={required} placeholder="Select a topic..." onChange={this.updateDisplayed} />
        </div>
        <div className="form-group">
          <label htmlFor="link">Content</label>
          <Field component={Select} name="content" options={content} placeholder="Select an article/video..." validate={required} />
        </div>
        <div className="form-group completed">
          <label htmlFor="completed">Is the content completed?</label>
          <Field name="completed" component={Input} type="radio" value="no"/> <p>No</p>
          <Field name="completed" component={Input} type="radio" value="yes"/> <p>Yes</p>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time Spent (in minutes)</label>
          <Field component={Input} type="number" min="1" max="1200" name="time" validate={[required, nonEmpty, isTrimmed, isNumber]} />
        </div>
        <div className="form-group">
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
        </div>
      </form>
    )
  }
};

const mapStateToProps = state => ({
  topics: state.memo.defaultTopics,
  content: state.memo.contentDisplayed
});

ManualEntryForm = connect(mapStateToProps)(ManualEntryForm);

export default reduxForm({
	form: "manual-submit",
	onSubmitFail: (errors, dispatch) => console.log(errors)
})(ManualEntryForm);
