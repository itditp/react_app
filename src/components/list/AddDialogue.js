import React, { Component } from 'react';
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
        modal={true}
        open={openAdd}
        onRequestClose={handleCloseAdd}
        autoScrollBodyContent={true}>

        <If condition={ !workerValue && !managerValue }>
          <Then>
            <div>
              <RaisedButton label="Worker" onClick={AddWorker} secondary={true} style={style} />
              <RaisedButton label="Manager" onClick={AddManager} secondary={true} style={style} />
            </div>
          </Then>
        </If>

        {workerValue && <WorkerForm backToCoice={backToCoice} onSubmit={handleSubmitWorker}/>}
        {managerValue && <ManagerForm backToCoice={backToCoice} onSubmit={handleSubmitManager}/>}
        
        <div style={styleFlatButtonButton}>
          <FlatButton
            label="Close"
            primary={true}
            onTouchTap={handleCloseAdd}
            />
        </div>
      </Dialog>
);

export default AddDialogue;