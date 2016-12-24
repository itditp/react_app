import React, {PropTypes} from 'react';


const WorkerDetail = ({currentMan}) => (
  <div className="workerDetail">
    <h3> This is worker.</h3>
    <p>firstName: {currentMan.firstName}</p>
    <p>lastName: {currentMan.lastName}</p>
    <p>patronymic: {currentMan.patronymic}</p>
    <p>payment: {currentMan.payment}$</p>
    <p>seatNumber: {currentMan.seatNumber}</p>
    <p>lunchTime: from {currentMan.lunchTimeAtBegin.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })} to {currentMan.lunchTimeAtEnd.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>
  </div>
);

WorkerDetail.propTypes = {
  currentMan: PropTypes.object.isRequired,
  lunchTimeAtEnd: PropTypes.object,
  lunchTimeAtBegin: PropTypes.object
};

export default WorkerDetail;