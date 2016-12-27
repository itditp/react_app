import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {float: 'right'};

const WorkerDetail = ({currentMan, editWorker}) => (
  <div>
  <FlatButton label="Edit" primary onClick={editWorker} style={style} />
    <h3> This is worker</h3>
    <p>firstName: {currentMan.firstName}</p>
    <p>patronymic: {currentMan.patronymic}</p>
    <p>lastName: {currentMan.lastName}</p>
    <p>payment: {currentMan.payment}$</p>
    <p>seatNumber: {currentMan.seatNumber}</p>
    <p>lunchTime: from {currentMan.lunchTime.start.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })} to {currentMan.lunchTime.end.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>
  </div>
);

WorkerDetail.propTypes = {
  currentMan: PropTypes.object.isRequired,
  editWorker: PropTypes.func.isRequired
};

export default WorkerDetail;