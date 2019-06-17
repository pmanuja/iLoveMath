import React, {Component} from 'react';


class SheetGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : "",
      correctAns : false
    }
  }

  getAnswer= (val1, op, val2) =>{
    if(op === "+"){
      return val1 + val2;
    }
  }

  handleChange = (event) => {
      console.log(event.target.value)
      this.setState({
        value : event.target.value
      });
      let userInput = event.target.value;
      console.log(this.props.element1);
      console.log(this.props.element2);
      let val1 = parseInt(this.props.element1);
      let op = this.props.operation;
      let val2 = parseInt(this.props.element2);
      console.log(val1, op, val2);
      let correctAns = this.getAnswer(val1, op, val2);
      console.log(`correct ans is ${correctAns}`);
      if(parseInt(userInput) === correctAns){
          console.log(`user answer is correct`);
          this.setState({
            correctAns:true
          });
      }
      else{
        this.setState({
          correctAns:false
        });
      }
    }

  render(){

    return (
      <div>
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
                <form>
                  <input type="text" value={this.state.value} onChange={this.handleChange}/>
                  { this.state.correctAns ? <label htmlFor="img"><img src="/checkmark.png" alt="no image" />
                    </label>
                    : <label htmlFor="img"><img src="/wrong.jpeg" alt="no image" />
                      </label>
                  }
                </form>

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
