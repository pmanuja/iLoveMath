import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      noOfQuestions : 0,
      level:"",
      operation:""
    }
  }

handleInputChange =(e) =>{
  console.log("selected operations", e.target.name, e.target.value);
  this.setState({
    [e.target.name] : e.target.value
  },() => {
    console.log(this.state);
  });
}

handleSubmit = (e) =>{
  console.log("clicked on submit");
}

  render(){
    return(
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-div">
            <label htmlFor="operations">Select Operation</label>
            <br/>
            <select name="operations" onChange={this.handleInputChange}>
              <option value="addition">+</option>
              <option value="subtraction">-</option>
              <option value="multiplication">*</option>
              <option value="division">÷</option>
            </select>
            <br/>
          </div>
        <div className="form-div">
          <label htmlFor="level">Select level</label>
          <br/>
          <select name="level" onChange={this.handleInputChange}>
            <option value="one" >level 1</option>
            <option value="two">level 2</option>
            <option value="three">level 3</option>
          </select>
          <br/>
        </div>
        <div className="form-div">
          <label htmlFor="noOfQuestions">Number of questions</label>
          <br/>
          <select name="noOfQuestions" onChange={this.handleInputChange}>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
          </select>
          <br/>
        </div>
          <input type="submit" name="" value="submit" />
        </form>
      </div>
    );
  }
}

export default Form;
