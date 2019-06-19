import React, {Component} from 'react';


class Options extends Component {

  render(){
    return (
      <div className="options-div">
        <button className="option-btn" onClick={this.props.genPDF}>Download</button>
        <button className="option-btn" onClick={this.props.solveOnline}>Solve Online</button>
        <button className="option-btn" onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Options;
