import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import WorkerDetail from './WorkerDetail';
import ManagerDetail from './ManagerDetail';
import {ListItem} from 'material-ui/List';
import InitializeWorkerEditForm from './InitializeWorkerEditForm';
import InitializeManagerEditForm from './InitializeManagerEditForm';
import {bindActionCreators} from 'redux';
import * as workerActions from '../../actions/workerActions';
import * as managerActions from '../../actions/managerActions';
import {connect} from 'react-redux';
import toastr from 'toastr';


class DetailEditBox extends Component {

	constructor(props){
		super(props);

		this.state = {
			showModal: false,
			detailWorkerValue: true,
			editWorkerValue: null,
			detailManagerValue: true,
			editManagerValue: null
		};

		this.toggleModal = this.toggleModal.bind(this);

		this.editWorker = this.editWorker.bind(this);
		this.updateSubmitWorker = this.updateSubmitWorker.bind(this);

		this.editManager = this.editManager.bind(this);
		this.updateSubmitManager = this.updateSubmitManager.bind(this);

	}

	updateSubmitManager(manager) {
		this.props.manageractions.updateManager(manager);
		this.toggleModal();
		toastr.success('Manager updated');
	}

	editManager() {
		this.setState({
			detailManagerValue: !this.state.detailManagerValue,
			editManagerValue: !this.state.editManagerValue
		});
	}

	updateSubmitWorker(worker) {
		this.props.workeractions.updateWorker(worker);
		this.toggleModal();
		toastr.success('Worker updated');
	}

	editWorker() {
		this.setState({
			detailWorkerValue: !this.state.detailWorkerValue,
			editWorkerValue: !this.state.editWorkerValue
		});

	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal,
			detailWorkerValue: true,
			editWorkerValue: null,
			detailManagerValue: true,
			editManagerValue: null
		});
	}

	render() {
		
		const styleForMan = {
			margin: 'auto',
			textAlign: "center",
			maxWidth: 500
		};
		const style = {float: 'right'};

		return (
			<div>
				<ListItem  style={styleForMan} onClick={this.toggleModal}>
					{this.props.currentMan.firstName}{' '}
					{this.props.currentMan.patronymic}{' '}
					{this.props.currentMan.lastName}
				</ListItem>
				<Dialog 
					open={this.state.showModal}
					modal
					onRequestClose={this.toggleModal}
					autoScrollBodyContent>

					{this.state.detailWorkerValue && this.props.currentMan.isWorker && <WorkerDetail editWorker={this.editWorker} currentMan={this.props.currentMan}/>}
					{this.state.editWorkerValue && <InitializeWorkerEditForm onSubmit={this.updateSubmitWorker} editWorker={this.editWorker} currentMan={this.props.currentMan}/>}

					{this.state.detailManagerValue && this.props.currentMan.isManager && <ManagerDetail editManager={this.editManager} currentMan={this.props.currentMan}/>}
					{this.state.editManagerValue && <InitializeManagerEditForm onSubmit={this.updateSubmitManager} editManager={this.editManager} currentMan={this.props.currentMan}/>}

					<FlatButton label="Close" primary onClick={this.toggleModal} style={style} />
				</Dialog>
			</div>
		);
	}
}

DetailEditBox.propTypes = {
	currentMan: PropTypes.object.isRequired,
	workeractions: PropTypes.object.isRequired,
	manageractions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		workers: state.workers,
		managers: state.managers
	};
}

function mapDispatchToProps(dispatch) {
	return {
		workeractions: bindActionCreators(workerActions, dispatch),
		manageractions: bindActionCreators(managerActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailEditBox);
