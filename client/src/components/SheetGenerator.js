import React, {Component} from 'react';

class SheetGenerator extends Component {
  render(){
    return (
      <div>{this.props.data.map((element, index) => {
        if(element[0] < element[1]){
          return (
              <div className = "qTable" key = {index}>
              <table>
                <tbody>
                  <tr><td>{index + 1})</td><td>{element[1]}</td></tr>
                  <tr><td></td><td className="lastRow">{this.props.operation}{element[0]}</td></tr>
                </tbody>
              </table>
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
                  <tr><td>{index + 1})</td><td>{element[0]}</td></tr>
                  <tr><td></td><td className="lastRow">{this.props.operation}{element[1]}</td></tr>
                </tbody>
              </table>
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
