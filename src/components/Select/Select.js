import React from "react";

import "./Select.css";

export default class Select extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">{this.props.meta.warning}</div>;
    }

    const options = this.props.options.map((option, index) => <option key={index} value={option} >{option}</option>);

    return (
      <div className="form-input select-input">
        <select
          {...this.props.input}
          id={this.props.input.name}
          ref={input => (this.input = input)}
        >
        <option value="select">{this.props.placeholder}</option>
        {options}
        </select>
        {error}
        {warning}
      </div>
    );
  }
}
