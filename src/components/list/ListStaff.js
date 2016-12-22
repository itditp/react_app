import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import DialogueBox from './DialogueBox';


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
        <DialogueBox currentMan={currentMan}/>
      </div>
    );
  }

  render(){

    const self = this;
    const { staff } = this.props;

    return(
      <div>
        <div>
          {staff.sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase()).map(self.renderRecipeList)}
        </div>
      </div>
    );
  }
}

ListStaff.propTypes = {
  staff: PropTypes.array.isRequired
};

export default ListStaff;
