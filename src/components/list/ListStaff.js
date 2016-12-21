import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const styleForMan = {
  margin: 10,
  padding: 10,
  textAlign: "center"
};

const ListStaff = ({staff, handleOpenDetail, handleCloseDetail, openDetail}) => {
  return (
    <div>
    <h1>Staff:</h1>
    <div>
    {staff.sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase()).map(man =>
        <Paper style={styleForMan} key={man.id} zDepth={2} onClick={handleOpenDetail}>
        {man.firstName}{' '}
        {man.patronymic}{' '}
        {man.lastName}
        </Paper>
      )}
    </div>
    <Dialog
        modal={false}
        open={openDetail}
        onRequestClose={handleCloseDetail}
        autoScrollBodyContent={true}>

        vwevewvewvewvew
        <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleCloseDetail}
        />
        </Dialog>
    </div>
    );
};

ListStaff.propTypes = {
  staff: PropTypes.array.isRequired
};

export default ListStaff;






/*
const ListStaff = ({staff}) => {
  return (
    <div>
      <h1>Staff:</h1>
      <div>
        {staff.map(man =>
          <Paper style={styleForMan} key={man.id} zDepth={2}>
            <Link to={'/staff/' + man.id}>
              {man.firstName}{' '}
              {man.lastName}{' '}
              {man.patronymic}
            </Link>
          </Paper>
        )}
      </div>
    </div>
  );
};*/