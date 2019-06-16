import React, {Component} from 'react';


class Options extends Component {

  render(){
    return (
      <ul>
        <li onClick ={this.props.toggleViewSheet} >View Sheet </li>
        <li><button onClick={this.props.print}>print</button></li>
        <li> Solve Online </li>
      </ul>
    );
  }
}

export default Options;
