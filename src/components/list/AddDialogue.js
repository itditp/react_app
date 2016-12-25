import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import WorkerForm from './WorkerForm';
import RaisedButton from 'material-ui/RaisedButton';
import { If, Then } from 'react-if';
import ManagerForm from './ManagerForm';


const style = {margin: 12};
const required = value => value == null ? 'Required' : undefined;
const styleFlatButtonButton = {
  float: 'right'
};

const AddDialogue = ({ 
  handleSubmitWorker, 
  workerValue, 
  managerValue, 
  backToCoice, 
  handleSubmitManager, 
  openAdd, 
  handleCloseAdd, 
  AddManager, 
  AddWorker 
}) => (
   <Dialog
        modal
        open={openAdd}
        onRequestClose={handleCloseAdd}
        autoScrollBodyContent>

        <If condition={!workerValue && !managerValue}>
          <Then>
            <div>
              <RaisedButton label="Worker" onClick={AddWorker} secondary style={style} />
              <RaisedButton label="Manager" onClick={AddManager} secondary style={style} />
            </div>
          </Then>
        </If>

        {workerValue && <WorkerForm backToCoice={backToCoice} onSubmit={handleSubmitWorker}/>}
        {managerValue && <ManagerForm backToCoice={backToCoice} onSubmit={handleSubmitManager}/>}
        
        <div style={styleFlatButtonButton}>
          <FlatButton
            label="Close"
            primary
            onTouchTap={handleCloseAdd}
            />
        </div>
      </Dialog>
);

AddDialogue.propTypes = {
  handleSubmitWorker: PropTypes.func.isRequired,
  workerValue: PropTypes.bool.isRequired,
  managerValue: PropTypes.bool.isRequired,
  backToCoice: PropTypes.func.isRequired,
  handleSubmitManager: PropTypes.func.isRequired,
  openAdd: PropTypes.bool.isRequired,
  handleCloseAdd: PropTypes.func.isRequired,
  AddManager: PropTypes.func.isRequired,
  AddWorker: PropTypes.func.isRequired
};

export default AddDialogue;