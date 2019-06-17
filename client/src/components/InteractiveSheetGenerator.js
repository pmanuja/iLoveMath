import React, {Component} from 'react';


class InteractiveSheetGenerator extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : "",
      correctAns : false,
      remark : false
    }
  }

  getAnswer= (val1, op, val2) =>{
    if(op === "+"){
      return val1 + val2;
    }
  }

  handleChange = (event) => {
      console.log(event.target.value)
      console.log(this.state.remark);
      this.setState({
        value : event.target.value,
        remark:true
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
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                  { this.state.correctAns ? <label htmlFor="img"><img src="/checkmark.png" alt="" />
                    </label>
                    : [(this.state.remark ? <label htmlFor="img"><img src="/wrong.jpeg" alt="" /></label>
                      : null)
                      ]
                  }

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
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                  { this.state.correctAns && this.state.remark ? <label htmlFor="img"><img src="/checkmark.png" alt="" />
                    </label>
                    : [(this.state.remark ? <label htmlFor="img"><img src="/wrong.jpeg" alt="" /></label>
                      : null)
                      ]
                  }
              <br/>
              <br/>
              </div>

        }
        </div>

    );
  }
}

export default InteractiveSheetGenerator;
