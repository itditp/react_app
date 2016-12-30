import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';


let InitializeManagerEditForm = props => {
  
  const { handleSubmit, pristine, reset, submitting, editManager } = props;
  const style = {float: 'right'};
  const required = value => value ? undefined : 'Required';
  const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
  const maxLength20 = maxLength(20);
  const minLength = min => value => value && value.length < min ? `Must be ${min} characters or greater` : undefined;
  const minLength2 = minLength(2);

  return (
    <form>
      <div>
        <FlatButton style={style} label="Save" onClick={handleSubmit} disabled={pristine || submitting}/>
        <FlatButton style={style} label="Undo Changes" disabled={pristine || submitting} onClick={reset}/>
        <FlatButton style={style} onClick={editManager} label="Back" />
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
        <Field name="welcomTime.start"
          component={TimePicker}
          format={(value) => typeof(value) === 'string' ? new Date(value) : value}   
          hintText="welcomTimeStart" 
          floatingLabelText="welcomTimeStart"
          validate={required}/>
      </div>
      <div>
        <Field name="welcomTime.end"
          component={TimePicker}
          format={(value) => typeof(value) === 'string' ? new Date(value) : value}   
          hintText="welcomTimeEnd" 
          floatingLabelText="welcomTimeEnd"
          validate={required}/>
      </div>
    </form>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeManagerEditForm = reduxForm({
  form: 'InitializeManagerEditForm'
})(InitializeManagerEditForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeManagerEditForm = connect(
  (state, ownProps) => ({
    initialValues: ownProps.currentMan   
  })
)(InitializeManagerEditForm);

InitializeManagerEditForm.propTypes = {
  editManager: PropTypes.func.isRequired,
  reset: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default InitializeManagerEditForm;