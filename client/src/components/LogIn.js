import React, {Component} from 'react';
class LoginUser extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:""
    }
  }
  handleLogIn = (e) =>{
    console.log("create a session for user");
    e.preventDefault();
    console.log(this.state.username , this.state.password);
    //post request for creating user session
    fetch('http://localhost:3000/sessions', {
    body: JSON.stringify({"username":this.state.username, "password":this.state.password}),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(createdSession => {
      return createdSession.json()
    }).then(jsonedItem => {
      // whatever you want to do with the json data here
      console.log("session created? - ", jsonedItem);
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
    return(
      <div className="inner-container">
      <h2>Log In</h2>
       <form className="box" onSubmit={this.handleLogIn}>
       <div className="input-group">
         <label className="login-label" htmlFor="username">Username</label>
         <input className="login-input" autoComplete="off" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
       </div>
       <div className="input-group">
         <label className="login-label" htmlFor="password">Password</label>
         <input className="login-input" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
       </div>
       <div className="input-group">
         <input className="login-btn" type="submit" value="LogIn"/>
       </div>
       </form>
      </div>
    )
  }
}

export default LoginUser;
