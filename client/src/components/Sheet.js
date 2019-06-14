import React, {Component} from 'react';

class Sheet extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (

      <div>{this.props.data.map((element, index) => {
        return (<div className = "problem" key = {index}> {element[0]}  {this.props.operation}  {element[1]} = </div>)

      })}</div>
    );

  }
}

export default Sheet;
