import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';


let WorkerForm = class WorkerForm extends Component {
  componentDidMount() {
    this.refs.firstName            // the Field
    .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
    .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    .focus()                // on TextField
  }

  render() {

    const style = {float: 'right'};
    const required = value => value == null ? 'Required' : undefined;
    const { handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <button style={style} type="submit">Submit</button>
        </div>
        <div>
         <Field name="firstName"
            component={TextField}
            hintText="firstName"
            floatingLabelText="firstName"
            ref="firstName" withRef
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
            type='number'
            floatingLabelText="payment"
            validate={required}/>
        </div>
        <div>
          <Field name="seatNumber"
            component={TextField}
            hintText="seatNumber"
            type='number'
            floatingLabelText="seatNumber"
            validate={required}/>
        </div>
        <div>
          <Field name="lunchTimeAtBegin"
            component={TimePicker}
            hintText="lunchTimeAtBegin" 
            floatingLabelText="lunchTimeAtBegin"
            validate={required}/>
        </div>
        <div>
          <Field name="lunchTimeAtEnd"
            component={TimePicker}
            hintText="lunchTimeAtEnd" 
            floatingLabelText="lunchTimeAtEnd"
            validate={required}/>
        </div>
      </form>
    );
  }
}

// Decorate the form component
WorkerForm = reduxForm({
  form: 'worker' // a unique name for this form
})(WorkerForm);

export default WorkerForm;