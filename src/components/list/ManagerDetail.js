import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {float: 'right'};

const ManagerDetail = ({currentMan, editManager}) => (
  <div>
  <FlatButton label="Edit" primary onClick={editManager} style={style} />
    <h3> This is manager</h3>
    <p>firstName: {currentMan.firstName}</p>
    <p>patronymic: {currentMan.patronymic}</p>
    <p>lastName: {currentMan.lastName}</p>
    {typeof(currentMan.welcomTime.start)==='string' && <p>welcomTime: from {new Date(currentMan.welcomTime.start).toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })} to {new Date(currentMan.welcomTime.end).toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>}
    {typeof(currentMan.welcomTime.start)==='object' && <p>welcomTime: from {currentMan.welcomTime.end.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })} to {currentMan.welcomTime.end.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>}
  </div>
);

ManagerDetail.propTypes = {
  currentMan: PropTypes.object.isRequired,
  editManager: PropTypes.func.isRequired
};

export default ManagerDetail;