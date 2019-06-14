import React, {Component} from 'react';

class Form extends Component {
  render(){
    return(
      <div>
        <form className="form">
          <div className="form-div">
            <label for="operations">Select Operation</label>
            <br/>
            <select name="operations">
              <option value="addition" >+</option>
              <option value="subtraction">-</option>
              <option value="multiplication">*</option>
              <option value="division">÷</option>
            </select>
            <br/>
          </div>
        <div className="form-div">
          <label for="level">Select level</label>
          <br/>
          <select name="level">
            <option value="one" >level 1</option>
            <option value="two">level 2</option>
            <option value="three">level 3</option>
          </select>
          <br/>
        </div>
        <div className="form-div">
          <label for="noOfQuestions">Number of questions</label>
          <br/>
          <select name="noOfQuestions">
            <option value="twelve" >12</option>
            <option value="eighteen">18</option>
            <option value="twentyFour">24</option>
          </select>
          <br/>
        </div>
        </form>
      </div>
    );
  }
}

export default Form;
