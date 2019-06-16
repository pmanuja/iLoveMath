import React, {Component} from 'react';


class Options extends Component {

  render(){
    return (
      <ul>
        <li onClick ={this.props.viewSheet} >View Sheet </li>
        <li><button onClick={this.props.genPDF}>print</button></li>
        <li> Solve Online </li>
      </ul>
    );
  }
}

export default Options;
