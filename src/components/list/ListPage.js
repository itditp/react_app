import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as workerActions from '../../actions/workerActions';
import * as managerActions from '../../actions/managerActions';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddDialogue from './AddDialogue';
import ListStaff from './ListStaff';
import toastr from 'toastr';


class ListPage extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			openAdd: false,
			workerValue: false,
			managerValue: false
		};

		//for  addModalWindow:
		this.handleOpenAdd = this.handleOpenAdd.bind(this);
		this.handleCloseAdd = this.handleCloseAdd.bind(this);

		//for saveNewStaff:
		this.handleSubmitWorker = this.handleSubmitWorker.bind(this);
		this.handleSubmitManager = this.handleSubmitManager.bind(this);

		this.AddWorker = this.AddWorker.bind(this);
		this.AddManager = this.AddManager.bind(this);

		this.backToCoice = this.backToCoice.bind(this);
	}

	AddWorker() {
		this.setState({
			workerValue: true,
			managerValue: false
		});
	}

	AddManager() {
		this.setState({
			workerValue: false,
			managerValue: true
		});
	}
	handleOpenAdd() {
		this.setState({openAdd: true});
	}

	handleCloseAdd() {
		this.setState({
			openAdd: false,
			workerValue: false,
			managerValue: false
		});
	}

	handleSubmitWorker(newWorker) {
		this.props.workeractions.saveWorker(newWorker);
		this.handleCloseAdd();
		toastr.success('Worker saved');

	}

	handleSubmitManager(newManager) {
		this.props.manageractions.saveManager(newManager);
		this.handleCloseAdd();
		toastr.success('Manager saved');
	}

	backToCoice() {
		this.setState({
			workerValue: false,
			managerValue: false
		});
	}

	render() {

		const workers = this.props.workers;
		const managers = this.props.managers;
		const staff = workers.concat(managers);
		const styleFloatingActionButton = {
			margin: 5,
			float: 'right'
		};

		return(
			<div>
				<div>
					<FloatingActionButton 
						mini 
						style={styleFloatingActionButton} 
						onTouchTap={this.handleOpenAdd}>
						<ContentAdd />
					</FloatingActionButton>

					<AddDialogue   /*modalWindow(add stuff)*/
						openAdd={this.state.openAdd}
						workerValue={this.state.workerValue}
						managerValue={this.state.managerValue}
						handleSubmitWorker={this.handleSubmitWorker}
						handleSubmitManager={this.handleSubmitManager}
						handleCloseAdd={this.handleCloseAdd}
						AddWorker={this.AddWorker}
						AddManager={this.AddManager}
						backToCoice={this.backToCoice}/>
				</div>
				<ListStaff staff={staff}/>
			</div>
		);
	}
}

ListPage.propTypes = {
	workers: PropTypes.array.isRequired,
	workeractions: PropTypes.object.isRequired,
	manageractions: PropTypes.object.isRequired,
	managers: PropTypes.array.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);