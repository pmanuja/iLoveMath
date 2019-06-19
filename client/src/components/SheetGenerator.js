import React, {Component} from 'react';


class SheetGenerator extends Component {


  render(){

    return (
      <div className="sheet-container">
        {this.props.element1 < this.props.element2
          ?
            <div className = "qTable">
              <table>
                <tbody>
                  <tr><td>{this.props.index + 1})</td><td></td><td>{this.props.element2}</td></tr>
                  <tr><td></td><td>{this.props.operation}</td><td>{this.props.element1}</td></tr>
                </tbody>
              </table>
                <hr className="lastRow"/>
              <br/>
              <br/>
              </div>
        :
              <div className = "qTable">
              <table>
                <tbody>
                  <tr><td>{this.props.index +1 })</td><td></td><td>{this.props.element1}</td></tr>
                  <tr><td></td><td>{this.props.operation}</td><td>{this.props.element2}</td></tr>
                </tbody>
              </table>
                <hr className="lastRow"/>
              <br/>
              <br/>
              </div>

        }
        </div>

    );
  }
}

export default SheetGenerator;
