import React, {Component} from 'react';

class MainHeader extends Component{
  render(){
    return(
      <div>
      <div className="main-header">
        <h1>Math Sheet Generator</h1>
        <div className="red-border">
          <div className="get-Started">
            <h2>Generate Random Sheets for Math Practice</h2>
            <button onClick={this.props.showForm} className="get-Started-btn" >Get Started</button>
          </div>
        
        </div>
      </div>
        <div className="white-bgc">
        </div>
      </div>
    );
  }

}

export default MainHeader;
