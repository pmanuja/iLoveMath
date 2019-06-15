import React, {Component} from 'react';
import SheetGenerator from './SheetGenerator.js'

class Sheet extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <SheetGenerator data = {this.props.data} operation = {this.props.operation}/>
    );
  }
}

export default Sheet;
