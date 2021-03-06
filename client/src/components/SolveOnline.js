import React, {Component} from 'react';
import InteractiveSheetGenerator from './InteractiveSheetGenerator.js'

class SolveOnline extends Component {

  render(){
    return (
      <div>
        <div>
        <button className="option-btn" onClick={this.props.saveMyProgress}>Save my progress</button>
        <button className="option-btn" onClick={this.props.reset}>Reset</button>
        </div>

      <div id="interactivePDF" className = "interactive-grid-container">{this.props.data.map((element, index) => {
          return (
              <InteractiveSheetGenerator
              element1 = {element[0]}
              element2 = {element[1]}
              key = {index}
              index = {index}
              data = {this.props.data}
              operation = {this.props.operation}/>
          )

      })}
      </div>
      </div>
    );
  }
}

export default SolveOnline;
