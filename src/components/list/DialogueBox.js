import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';


class DialogueBox extends Component {

  constructor(props){

    super(props);

    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const styleForMan = {
      margin: 10,
      padding: 10,
      textAlign: "center"
    };

    return (
      <div>
        <Paper style={styleForMan} onClick={this.toggleModal}>
            {this.props.currentMan.firstName}{' '}
            {this.props.currentMan.patronymic}{' '}
            {this.props.currentMan.lastName}
        </Paper>

        <Dialog 
          open={this.state.showModal}
          modal={false}
          onRequestClose={this.toggleModal}>
          {this.props.currentMan.firstName}
          <Paper onClick={this.toggleModal}>Close</Paper>
        </Dialog>
      </div>
    );
  }
}

DialogueBox.propTypes = {
  currentMan: PropTypes.object.isRequired
};

export default DialogueBox;