import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      noOfQuestions : 12,
      level:"1",
      operation:"+"
    }
  }

handleInputChange =(e) =>{
  console.log("selected event", e.target.name, e.target.value);
  this.setState({
    [e.target.name] : e.target.value
  },() => {
    console.log(this.state);
  });
}

handleSubmit = (e) =>{
  console.log("clicked on submit");
  e.preventDefault();
  this.props.showOptions();
  this.props.createSheet(this.state);
  this.clearform();
}
clearform = () =>
{
  this.setState({
    noOfQuestions : 12,
    level:"1",
    operation:"+"
  });

}

render(){
  return(
    <div className="form-main-div">
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-div">
          <label className="login-label" htmlFor="operation">Select Operation</label>
          <br/>
          <select className="input-select"  name="operation" value = {this.state.operation} onChange={this.handleInputChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="÷">÷</option>
          </select>
          <br/>
        </div>
      <div className="form-div">
        <label className="login-label" htmlFor="level">Select level</label>
        <br/>
        <select className="input-select" name="level" value = {this.state.level} onChange={this.handleInputChange}>
          <option value="1" >level 1</option>
          <option value="2">level 2</option>
          <option value="3">level 3</option>
        </select>
        <br/>
      </div>
      <div className="form-div">
        <label className="login-label" htmlFor="noOfQuestions">Number of questions</label>
        <br/>
        <select className="input-select"  name="noOfQuestions" value = {this.state.noOfQuestions} onChange={this.handleInputChange}>
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
        </select>
        <br/>
      </div>
      <div className="form-div">
        <label htmlFor=""></label>
        <br/>
        <input className="submit-btn" type="submit" name="" value="submit" />
      </div>
      </form>
    </div>
  );
}
}

export default Form;
