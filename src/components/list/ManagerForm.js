import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TimePicker, TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';


let ManagerForm = class ManagerForm extends Component {
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
      </form>
    );
  }
}

// Decorate the form component
ManagerForm = reduxForm({
  form: 'manager' // a unique name for this form
})(ManagerForm);

export default ManagerForm;