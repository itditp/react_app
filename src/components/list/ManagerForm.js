import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import validate from './ValidateManager';
import { connect } from 'react-redux';

const newManager = {           //forValidation
  welcomTime: {
    start: new Date(),
    end: new Date()
  }
};

let ManagerForm = class ManagerForm extends Component {

  render() {

    const style = {float: 'right'};
    const { handleSubmit, submitting, pristine, backToCoice } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <FlatButton style={style} disabled={pristine || submitting} onTouchTap={handleSubmit} label="Save" />
            <FlatButton style={style} onClick={backToCoice} label="Back" />
          </div>
          <div>
            <Field name="firstName"
              component={TextField}
              hintText="firstName"
              floatingLabelText="firstName"/>
          </div>
          <div>
            <Field name="lastName"
              component={TextField}
              hintText="lastName"
              floatingLabelText="lastName"/>
          </div>
          <div>
            <Field name="patronymic"
              component={TextField}
              hintText="patronymic"
              floatingLabelText="patronymic"/>
          </div>
          <div>
            <Field name="welcomTime.start"
              component={TimePicker}
              format={null}
              hintText="welcomTimeStart" 
              floatingLabelText="welcomTimeStart"/>
          </div>
          <div>
            <Field name="welcomTime.end"
              component={TimePicker}
              format={null}
              hintText="welcomTimeEnd" 
              floatingLabelText="welcomTimeEnd"/>
          </div>
        </form>
      </div>
    );
  }
};

ManagerForm.propTypes = {
    backToCoice: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired
};

// Decorate the form component
ManagerForm = reduxForm({
  form: 'manager',
  validate
})(ManagerForm);

ManagerForm = connect(
  (state, ownProps) => ({
    initialValues: newManager
  })
)(ManagerForm);

export default ManagerForm;