import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';


let WorkerForm = class WorkerForm extends Component {
  render() {

    const style = {float: 'right'};
    const required = value => value == null ? 'Required' : undefined;
    const positiveNumber = value => value < 0 ? 'Only positiveNumber' : undefined;
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
            floatingLabelText="firstName"
            validate={required}/>
        </div>
        <div>
           <Field name="lastName"
            component={TextField}
            hintText="lastName"
            floatingLabelText="lastName"
            validate={required}/>
        </div>
        <div>
          <Field name="patronymic"
            component={TextField}
            hintText="patronymic"
            floatingLabelText="patronymic"
            validate={required}/>
        </div>
        <div>
         <Field name="payment"
            component={TextField}
            hintText="payment"
            type="number"
            floatingLabelText="payment"
            validate={[required, positiveNumber]}/>
        </div>
        <div>
          <Field name="seatNumber"
            component={TextField}
            hintText="seatNumber"
            type="number"
            floatingLabelText="seatNumber"
            validate={[required, positiveNumber]}/>
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
            format={null}
            hintText="lunchTimeEnd" 
            floatingLabelText="lunchTimeEnd"
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
  form: 'worker' // a unique name for this form
})(WorkerForm);

export default WorkerForm;