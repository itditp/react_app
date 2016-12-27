import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';


let InitializeWorkerEditForm = props => {
  
  const { handleSubmit, pristine, reset, submitting, editWorker } = props;
  const style = {float: 'right'};
  const required = value => value == null ? 'Required' : undefined;
  const positiveNumber = value => value < 0 ? 'Only positiveNumber' : undefined;

  return (
    <form>
      <div>
        <FlatButton style={style} label="Save" onClick={handleSubmit} disabled={pristine || submitting}/>
        <FlatButton style={style} label="Undo Changes" disabled={pristine || submitting} onClick={reset}/>
        <FlatButton style={style} onClick={editWorker} label="Back" />
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
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeWorkerEditForm = reduxForm({
  form: 'InitializeWorkerEditForm'  // a unique identifier for this form
})(InitializeWorkerEditForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeWorkerEditForm = connect(
  (state, ownProps) => ({
    initialValues: ownProps.currentMan
  })
)(InitializeWorkerEditForm);

InitializeWorkerEditForm.propTypes = {
  editWorker: PropTypes.func.isRequired,
  reset: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default InitializeWorkerEditForm;