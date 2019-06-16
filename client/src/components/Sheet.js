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
        <div id="sheetdata" className = "grid-container">{this.props.data.map((element, index) => {
            return (
                <SheetGenerator
                element1 = {element[0]}
                element2 = {element[1]}
                key = {index}
                index = {index}
                data = {this.props.data}
                operation = {this.props.operation}/>
            )

        })}
        </div>


    );
  }
}

export default Sheet;
