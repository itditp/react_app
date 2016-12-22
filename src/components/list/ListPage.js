import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as workerActions from '../../actions/workerActions';
import * as managerActions from '../../actions/managerActions';
import ListStaff from './ListStaff';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddDialogue from './AddDialogue';

class ListPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			openAdd: false,
			openDetail: false

		};
			//for  addModalWindow:
		this.handleOpenAdd = this.handleOpenAdd.bind(this);
		this.handleCloseAdd = this.handleCloseAdd.bind(this);
			//for  detailModalWindow:
		this.handleOpenDetail = this.handleOpenDetail.bind(this);
		this.handleCloseDetail = this.handleCloseDetail.bind(this);
			//for saveNewStaff:
		this.handleSubmitWorker = this.handleSubmitWorker.bind(this);
		this.handleSubmitManager = this.handleSubmitManager.bind(this)
	}

	handleOpenAdd() {
		this.setState({openAdd: true});
	}

	handleCloseAdd() {
		this.setState({openAdd: false});
	}

	handleOpenDetail() {
		this.setState({openDetail: true});
	}

	handleCloseDetail() {
		this.setState({openDetail: false});
	}

	handleSubmitWorker(newWorker) {
		console.log(newWorker);
		event.preventDefault();
		this.props.workeractions.saveWorker(newWorker);
	}

	handleSubmitManager(newManager) {
		console.log(newManager);
		event.preventDefault();
		this.props.manageractions.saveManager(newManager);
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
				<FloatingActionButton 
					mini={true} 
					style={styleFloatingActionButton} 
					onTouchTap={this.handleOpenAdd}>
					<ContentAdd />
				</FloatingActionButton>

				<AddDialogue   /*modalWindow for adding stuff*/
					openAdd={this.state.openAdd}
					handleSubmitWorker={this.handleSubmitWorker}
					handleSubmitManager={this.handleSubmitManager}
					handleCloseAdd={this.handleCloseAdd}/>

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