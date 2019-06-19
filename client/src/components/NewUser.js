import React, {Component} from 'react';

class NewUser extends Component {
constructor(props){
  super(props);
  this.state = {
    username:"",
    password:""
  }
}

createUser =(e) =>{
  console.log("create a new user");
  e.preventDefault();
  console.log(this.state.username , this.state.password);
  //post request for creating new user in mongo
  fetch('http://localhost:3000/users', {
  body: JSON.stringify({"username":this.state.username, "password":this.state.password}),
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
  }).then(createdItem => {
    return createdItem.json()
  }).then(jsonedItem => {
    // whatever you want to do with the json data here
    console.log("josoned item", jsonedItem);
  }).catch(err => console.log(err))

  this.clearForm();
}

handleChange = (e) => {
  console.log("handle change",e.target.name);
  this.setState({
    [e.target.name] : e.target.value
  });
}

clearForm=()=>{
  this.setState({
    username:"",
    password:""
  });
}

render(){
 return (
   <div className="inner-container">
   <h2>Sign Up</h2>
    <form className="box" onSubmit={this.createUser}>
      <div className="input-group">
        <label className="login-label" htmlFor="username">Username</label>
        <input className="login-input" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
      </div>
      <div className="input-group">
        <label className="login-label" htmlFor="password">Password</label>
        <input className="login-input" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      </div>
      <div className="input-group">
        <input className="login-btn" type="submit" value="SignUp"/>
      </div>
    </form>
   </div>
 );
}
}

export default NewUser;
