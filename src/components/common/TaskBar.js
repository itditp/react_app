import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class TaskBar extends React.Component {

    constructor() {
    super();
    
    switch (location.pathname) {
      case '/':
        this.state = {initalTab: 0};
        break;
      case '/list':
        this.state = {initalTab: 1};
        break;
      default:
        this.state = {initalTab: 0};
        break;
    }
  }

  hanldleChange(value) {
    switch (value) {
      case 0:
        return browserHistory.push('/');
      case 1:
        return browserHistory.push('/list');
      default:
        return browserHistory.push('/');
    }
  }

  render() {
    const style = {
      height: 50
    };

    return (
      <Tabs tabItemContainerStyle={style} onChange={this.hanldleChange} initialSelectedIndex={this.state.initalTab}>
        <Tab value={0} label="server"/>
        <Tab value={1} label="list"/>
      </Tabs>
    );
  }
}