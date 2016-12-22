import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import WorkerForm from './WorkerForm';
import RaisedButton from 'material-ui/RaisedButton';
import { If, Then } from 'react-if';
import ManagerForm from './ManagerForm';


class AddDialogue extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      workerValue: null,
      managerValue: null

    };

    this.AddWorker = this.AddWorker.bind(this);
    this.AddManager = this.AddManager.bind(this);
  }

  AddWorker() {
    this.setState({
      workerValue: 1,
      managerValue: null
    });
  }

  AddManager() {
    this.setState({
      workerValue: null,
      managerValue: 1
    });
  }

  render() {

    const style = {margin: 12};
    const required = value => value == null ? 'Required' : undefined;
    const { handleSubmitWorker, handleSubmitManager, openAdd, handleCloseAdd } = this.props;
    
    return (
      <Dialog
        modal={true}
        open={openAdd}
        onRequestClose={handleCloseAdd}
        autoScrollBodyContent={true}>

        <If condition={ !this.state.workerValue && !this.state.managerValue }>
          <Then>
            <div>
              <RaisedButton label="Worker" onClick={this.AddWorker} secondary={true} style={style} />
              <RaisedButton label="Manager" onClick={this.AddManager} secondary={true} style={style} />
            </div>
          </Then>
        </If>

        { this.state.workerValue && <WorkerForm onSubmit={handleSubmitWorker}/>}
        { this.state.managerValue && <ManagerForm onSubmit={handleSubmitManager}/>}

        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={handleCloseAdd}
          />
      </Dialog>
    );
  }
}

export default AddDialogue;