import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import { TimePicker, TextField } from 'redux-form-material-ui';
import {bindActionCreators} from 'redux';
import * as workerActions from '../../actions/workerActions';


const newWorker = {
  id: '', 
  firstName: 'ew', 
  lastName: 'weew', 
  patronymic: 'evrerbe',
  payment: '300',
  seatNumber: '2', 
  lunchTimeAtBegin: null,
  lunchTimeAtEnd: null
};


// validation functions
const required = value => value == null ? 'Required' : undefined;

let InitializeFromStateForm = class InitializeFromStateForm extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      newWorker: Object.assign({}, props.newWorker)
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.workeractions.saveWorker(this.state.newWorker);
  }

  componentDidMount() {
    this.refs.firstName            // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus()                // on TextField
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Field name="firstName"
            component={TextField}
            hintText="firstName"
            floatingLabelText="firstName"
            validate={required}
            ref="firstName" withRef/>
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
            type='number'
            component={TextField}
            hintText="payment"
            floatingLabelText="payment"
            validate={required}/>
        </div>
         <div>
          <Field name="seatNumber"
            type='number'
            component={TextField}
            hintText="seatNumber"
            floatingLabelText="seatNumber"
            validate={required}/>
        </div>
        <div>
          <Field name="lunchTimeAtBegin"
            component={TimePicker}
            format={null}
            onChange={(value) => {
              console.log('time changed ', value) // eslint-disable-line no-console
            }}
            hintText="lunchTimeAtBegin"
            validate={required}/>
        </div>
         <div>
          <Field name="lunchTimeAtEnd"
            component={TimePicker}
            format={null}
            onChange={(value) => {
              console.log('time changed ', value) // eslint-disable-line no-console
            }}
            hintText="lunchTimeAtEnd"
            validate={required}/>
        </div>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div>
      </form>
    )
  }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState'  // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    newWorker: newWorker // pull initial values from account reducer
  }),
  dispatch => ({
    workeractions: bindActionCreators(workerActions, dispatch) // pull initial values from account reducer
  })                // bind account loading action creator
)(InitializeFromStateForm);


export default InitializeFromStateForm
