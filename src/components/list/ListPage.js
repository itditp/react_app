import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as workerActions from '../../actions/workerActions';
import * as managerActions from '../../actions/managerActions';
import ListStaff from './ListStaff';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import WorkerForm from './WorkerForm';
import InitializeFromStateForm from './InitializeFromStateForm';

class ListPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			open: false,
			openDetail: false,
			newWorker: Object.assign({}, props.newWorker),
			errors: {},
			timeStart: null,
			timeEnd: null

		};

		this.updateWorkerState = this.updateWorkerState.bind(this);
		this.saveWorker = this.saveWorker.bind(this);

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.handleOpenDetail = this.handleOpenDetail.bind(this);
		this.handleCloseDetail = this.handleCloseDetail.bind(this);

		this.handleChangeTimePickerStart = this.handleChangeTimePickerStart.bind(this);
		this.handleChangeTimePickerEnd = this.handleChangeTimePickerEnd.bind(this);
	}

	handleChangeTimePickerStart(event, date) {
		this.setState({timeStart: date});
	}

	handleChangeTimePickerEnd(event, date) {
		this.setState({timeEnd: date});
	}

	saveWorker(event) {
		event.preventDefault();
		this.props.workeractions.saveWorker(this.state.newWorker);
	}

	updateWorkerState(event) {
		const field = event.target.name;
		let newWorker = this.state.newWorker;
		newWorker[field] = event.target.value;
		return this.setState({newWorker: newWorker});
	}

	handleOpen() {
		this.setState({open: true});
	}

	handleClose() {
		this.setState({open: false});
	}

	handleOpenDetail() {
		this.setState({openDetail: true});
	}

	handleCloseDetail() {
		this.setState({openDetail: false});
	}

	render() {
		const workers = this.props.workers;
		const managers = this.props.managers;
		const staff = workers.concat(managers);

		return(
			<div>
			<RaisedButton label="Add Worker" onTouchTap={this.handleOpen} />
			<Dialog
			modal={false}
			open={this.state.open}
			onRequestClose={this.handleClose}
			autoScrollBodyContent={true}>

			<Card>
			<CardHeader
			title="Create Worker"
			
			actAsExpander={true}
			/>
			<CardText expandable={true}>
			{/*<WorkerForm
			onChange={this.updateWorkerState}
			onSave={this.saveWorker}
			newWorker={this.state.newWorker}
			errors={this.state.errors}
			onChangeTimeStart={this.handleChangeTimePickerStart}
			onChangeTimeEnd={this.handleChangeTimePickerEnd}
			timeStart={this.state.timeStart}
		timeEnd={this.state.timeEnd}/>*/}

		<InitializeFromStateForm />
		</CardText>
		</Card>

		<Card>
		<CardHeader
		title="Create Manager"

		actAsExpander={true}
		showExpandableButton={true}
		/>
		<CardText expandable={true}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		<CardActions>
		<FlatButton label="Save" />
		</CardActions>
		</CardText>
		</Card>
		<FlatButton
		label="Cancel"
		primary={true}
		onTouchTap={this.handleClose}
		/>
		</Dialog>
		<ListStaff 
		staff={staff}
		handleOpenDetail={this.handleOpenDetail}
		handleCloseDetail={this.handleCloseDetail}
		openDetail={this.state.openDetail}/>
		</div>
		);
	}
}

ListPage.propTypes = {
	workers: PropTypes.array.isRequired,
	workeractions: PropTypes.object.isRequired,
	manageractions: PropTypes.object.isRequired,
	managers: PropTypes.array.isRequired,
	newWorker: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	let newWorker = {
		id: '', 
		firstName: 'ew', 
		lastName: 'weew', 
		patronymic: '',
		payment: '',
		seatNumber: '', 
		lunchTimeAtBegin: '',
		lunchTimeAtEnd: ''
	};

	return {
		workers: state.workers,
		managers: state.managers,
		newWorker: newWorker
	};
}

function mapDispatchToProps(dispatch) {
	return {
		workeractions: bindActionCreators(workerActions, dispatch),
		manageractions: bindActionCreators(managerActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);