import React, {PropTypes} from 'react';


const WorkerDetail = ({currentMan, lunchTimeAtEnd, lunchTimeAtBegin}) => (
  <div className="workerDetail">
    <h3> This is worker.</h3>
    <p>firstName: {currentMan.firstName}</p>
    <p>lastName: {currentMan.lastName}</p>
    <p>patronymic: {currentMan.patronymic}</p>
    <p>payment: {currentMan.payment}$</p>
    <p>seatNumber: {currentMan.seatNumber}</p>
    <p>lunchTime: from {lunchTimeAtBegin.getHours()}:{lunchTimeAtBegin.getMinutes()} to {lunchTimeAtEnd.getHours()}:{lunchTimeAtEnd.getMinutes()}</p>
  </div>
);

WorkerDetail.propTypes = {
  currentMan: PropTypes.object.isRequired,
  lunchTimeAtEnd: PropTypes.object,
  lunchTimeAtBegin: PropTypes.object
};

export default WorkerDetail;


