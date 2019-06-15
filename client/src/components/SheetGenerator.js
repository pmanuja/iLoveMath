import React, {Component} from 'react';

class SheetGenerator extends Component {
  render(){
    return (
      <div className = "grid-container">{this.props.data.map((element, index) => {
        if(element[0] < element[1]){
          return (
              <div className = "qTable" key = {index}>
              <table>
                <tbody>
                  <tr><td>{index + 1})</td><td></td><td>{element[1]}</td></tr>
                  <tr><td></td><td>{this.props.operation}</td><td>{element[0]}</td></tr>
                </tbody>
              </table>
                <hr className="lastRow"/>
              <br/>
              <br/>
              </div>
          )
        }
        else{
          return (
              <div className = "qTable" key = {index}>
              <table>
                <tbody>
                  <tr><td>{index + 1})</td><td></td><td>{element[0]}</td></tr>
                  <tr><td></td><td>{this.props.operation}</td><td>{element[1]}</td></tr>
                </tbody>
              </table>
                <hr className="lastRow"/>
              <br/>
              <br/>

              </div>
          )
        }


      })}
      </div>


    );
  }
}

export default SheetGenerator;
