import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';



let WorkerForm = class WorkerForm extends Component {
    
  render() {

    const style = {float: 'right'};
    const { handleSubmit, submitting, pristine, backToCoice } = this.props;
    const required = value => value ? undefined : 'Required';
    const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
    const maxLength20 = maxLength(20);
    const minLength = min => value => value && value.length < min ? `Must be ${min} characters or greater` : undefined;
    const minLength2 = minLength(2);
    const minValue = value => value && value < 0 ? 'Onlny positive numbers'  : undefined;
    const notZero = value => value && value == 0 ? 'Must be greater than zero'  : undefined;
    
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
            floatingLabelText="firstName"
            validate={[ required, maxLength20, minLength2 ]}/>
        </div>
        <div>
           <Field name="lastName"
            component={TextField}
            hintText="lastName"
            floatingLabelText="lastName"
            validate={[ required, maxLength20, minLength2 ]}/>
        </div>
        <div>
          <Field name="patronymic"
            component={TextField}
            hintText="patronymic"
            floatingLabelText="patronymic"
            validate={[ required, maxLength20, minLength2 ]}/>
        </div>
        <div>
         <Field name="payment"
            component={TextField}
            hintText="payment"
            type="number"
            floatingLabelText="payment"
            validate={[required, minValue, notZero]}/>
        </div>
        <div>
          <Field name="seatNumber"
            component={TextField}
            hintText="seatNumber"
            type="number"
            floatingLabelText="seatNumber"
            validate={[required, minValue, notZero]}/>
        </div>
        <div>
          <Field name="lunchTime.start"
            component={TimePicker}
            format={null}   
            hintText="lunchTimeStart" 
            floatingLabelText="lunchTimeStart"
            validate={required}/>
        </div>
        <div>
          <Field name="lunchTime.end"
            component={TimePicker}
            hintText="lunchTimeEnd" 
            floatingLabelText="lunchTimeEnd"
            format={null}
            validate={required}/>
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
  form: 'worker'
})(WorkerForm);

export default WorkerForm;