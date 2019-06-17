import React, {Component} from 'react';


class Options extends Component {

  render(){
    return (
      <div>

        <button onClick={this.props.genPDF}>Download</button>
        <button onClick={this.props.solveOnline}>Solve Online</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Options;
