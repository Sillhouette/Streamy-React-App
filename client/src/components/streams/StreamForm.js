//Start imports
import React from "react";
import { Field, reduxForm } from "redux-form";

/**
 * StreamForm is a class-based component that displays the form to create/edit streams
 **/
class StreamForm extends React.Component {
  /**
   * renderError renders the changes to the component if there is an error in the form
   **/
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  /**
   * renderInput defines a general input section of a form, containing an error
   * field, label, and an input
   **/
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  /**
   * onSubmit handles the submission of the form to the onSubmit function from reduxForm
   **/
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  /**
   * render returns the layout of the form, filled with default values if they exist
   **/
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" label="Enter Title:" component={this.renderInput} />
        <Field
          name="description"
          label="Enter Description:"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

/**
 * validate checks the form for errors and displays the appropriate error message
 **/
const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

/**
 * export this component and hook it up to the reduxForm, with the validate function
 **/
export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
