import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import DetailEditBox from './DetailEditBox';
import {List} from 'material-ui/List';


class ListStaff extends Component {

  constructor(props){

    super(props);

    this.renderRecipeList = this.renderRecipeList.bind(this);
  }

  renderRecipeList(man, index){

    const currentMan = man;
    const styleForMan = {
      margin: 10,
      padding: 10,
      textAlign: "center"
    };

    return(
      <div key={currentMan.id}>
        <DetailEditBox currentMan={currentMan}/>
      </div>
    );
  }

  render(){

    const self = this;
    const { staff } = this.props;

    return(
      <div>
        <List>
          {staff.sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase()).map(self.renderRecipeList)}
        </List>
      </div>
    );
  }
}

ListStaff.propTypes = {
  staff: PropTypes.array.isRequired
};

export default ListStaff;
