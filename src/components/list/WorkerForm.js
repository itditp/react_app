import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import validate from './ValidateWorker';

const newWorker = {           //forValidation
    lunchTime: {
        start: new Date(),
        end: new Date()
    }
};

let WorkerForm = class WorkerForm extends Component {
  render() {

    const style = {float: 'right'};
    const { handleSubmit, submitting, pristine, backToCoice } = this.props;
    
    return (
      <form>
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
         <Field name="payment"
            component={TextField}
            hintText="payment"
            type="number"
            floatingLabelText="payment"/>
        </div>
        <div>
          <Field name="seatNumber"
            component={TextField}
            hintText="seatNumber"
            type="number"
            floatingLabelText="seatNumber"/>
        </div>
        <div>
          <Field name="lunchTime.start"
            component={TimePicker}
            format={null}   
            hintText="lunchTimeStart" 
            floatingLabelText="lunchTimeStart"/>
        </div>
        <div>
          <Field name="lunchTime.end"
            component={TimePicker}
            hintText="lunchTimeEnd" 
            floatingLabelText="lunchTimeEnd"
            format={null}/>
        </div>
      </form>
    );
  }
};

WorkerForm.propTypes = {
    backToCoice: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired
};

// Decorate the form component
WorkerForm = reduxForm({
  form: 'worker',
  validate
})(WorkerForm);

WorkerForm = connect(
  (state, ownProps) => ({
    initialValues: newWorker
  })
)(WorkerForm);

export default WorkerForm;