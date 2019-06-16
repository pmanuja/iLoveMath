import React, {Component} from 'react';


class Options extends Component {

  render(){
    return (
      <div>

        <button onClick={this.props.genPDF}>Download</button>
        <button>Solve Online </button>
      </div>
    );
  }
}

export default Options;
