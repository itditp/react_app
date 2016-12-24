import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as workerActions from '../../actions/workerActions';
import * as managerActions from '../../actions/managerActions';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddDialogue from './AddDialogue';
import ListStaff from './ListStaff';

class ListPage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			openAdd: false,
			workerValue: null,
			managerValue: null

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
		handleOpenAdd() {
			this.setState({openAdd: true});
		}

		handleCloseAdd() {
			this.setState({
				openAdd: false,
				workerValue: null,
				managerValue: null
			});
		}

		handleSubmitWorker(newWorker) {
			event.preventDefault();
			this.props.workeractions.saveWorker(newWorker);
			this.handleCloseAdd();
		}

		handleSubmitManager(newManager) {
			event.preventDefault();
			this.props.manageractions.saveManager(newManager);
			this.handleCloseAdd();
		}

		backToCoice() {
			this.setState({
				workerValue: null,
				managerValue: null
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
			const styleDiv = {
				margin: 103
			};

			return(
				<div style={styleDiv}>
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
					<div>
						<ListStaff staff={staff}/>
					</div>
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