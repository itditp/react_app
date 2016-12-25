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
    <p>welcomTime: from {currentMan.welcomTimeAtBegin.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })} to {currentMan.welcomTimeAtBegin.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' })}</p>
  </div>
);

ManagerDetail.propTypes = {
  currentMan: PropTypes.object.isRequired,
  editManager: PropTypes.func.isRequired
};

export default ManagerDetail;