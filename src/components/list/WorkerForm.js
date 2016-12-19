import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

const style = {
  marginLeft: 20
};

const WorkerForm = ({newWorker, onSave, onChange, errors, onChangeTimeStart, onChangeTimeEnd, timeStart, timeEnd}) => {
  return (
    <form>
      <Paper zDepth={2}>

      <TextField 
      hintText="First name"
      name="firstName"
      value={newWorker.firstName}
      onChange={onChange}
      error={errors.firstName} 
      style={style} 
      underlineShow={false} />
      <Divider />

      <TextField 
      hintText="Last name"
      name="lastName"
      value={newWorker.lastName}
      onChange={onChange}
      error={errors.lastName} 
      style={style} 
      underlineShow={false} />
      <Divider />

      <TextField 
      hintText="Patronymic"
      name="patronymic"
      value={newWorker.patronymic}
      onChange={onChange}
      error={errors.patronymic} 
      style={style} 
      underlineShow={false} />
      <Divider />

       <TextField 
      hintText="Payment"
      name="payment"
      value={newWorker.payment}
      onChange={onChange}
      error={errors.payment} 
      style={style} 
      underlineShow={false} />
      <Divider />

      <TextField 
      hintText="Seat number"
      name="seatNumber"
      value={newWorker.seatNumber}
      onChange={onChange}
      error={errors.seatNumber} 
      style={style} 
      underlineShow={false} />
    <Divider />

      <TimePicker
      format="24hr"
      hintText="Lunch time(start)"
      name="lunchTimeAtBegin"
      value={timeStart}
      onChange={onChangeTimeStart}
      error={errors.lunchTimeAtBegin} 
      style={style}
      underlineShow={false}
    />
    <Divider />
    <TimePicker
      format="24hr"
      hintText="Lunch time(end)"
      name="lunchTimeAtEnd"
      value={timeEnd}
      onChange={onChangeTimeEnd}
      error={errors.lunchTimeAtEnd} 
      style={style}
      underlineShow={false}
    />
    <Divider />

      <input
        type="submit"
        onClick={onSave}/>
        </Paper>
    </form>
  );
};

WorkerForm.propTypes = {
  newWorker: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object,
  onChangeTimeEnd: React.PropTypes.func.isRequired,
  onChangeTimeStart: React.PropTypes.func.isRequired,
  timeEnd: React.PropTypes.object,
  timeStart: React.PropTypes.object
};

export default WorkerForm;
