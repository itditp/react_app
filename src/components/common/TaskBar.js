import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class TaskBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Server" value="a" containerElement={<Link to="/"/>} />
        <Tab label="List" value="b" containerElement={<Link to="/list"/>}/>
      </Tabs>
    );
  }
}