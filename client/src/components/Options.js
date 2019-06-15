import React, {Component} from 'react';


class Options extends Component {

  render(){
    return (
      <ul>
        <li onClick ={this.props.toggleViewSheet} >View Sheet </li>
        <li> Solve Online </li>
      </ul>
    );
  }
}

export default Options;
