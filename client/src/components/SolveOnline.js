import React, {Component} from 'react';
import SheetGenerator from './SheetGenerator.js'

class SolveOnline extends Component {

  render(){
    return (
      <div id="interactivePDF" className = "interactive-grid-container">{this.props.data.map((element, index) => {
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

export default SolveOnline;
