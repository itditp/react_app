import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';


let ManagerForm = class ManagerForm extends Component {

  render() {

    const style = {float: 'right'};
    const required = value => value == null ? 'Required' : undefined;
    const { handleSubmit, backToCoice } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <FlatButton style={style} onTouchTap={handleSubmit} label="Save" />
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
            <Field name="welcomTimeAtBegin"
              component={TimePicker}
              hintText="welcomTimeAtBegin" 
              floatingLabelText="welcomTimeAtBegin"
              validate={required}/>
          </div>
          <div>
            <Field name="welcomTimeAtEnd"
              component={TimePicker}
              hintText="welcomTimeAtEnd" 
              floatingLabelText="welcomTimeAtEnd"
              validate={required}/>
          </div>
          <FlatButton style={style} onClick={backToCoice} label="Back" />
        </form>
      </div>
    );
  }
}

// Decorate the form component
ManagerForm = reduxForm({
  form: 'manager' // a unique name for this form
})(ManagerForm);

export default ManagerForm;