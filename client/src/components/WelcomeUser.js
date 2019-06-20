import React, {Component} from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MainHeader from './MainHeader.js'

class WelcomeUser extends Component {

  render(){
    console.log("is user logged in" , this.props.isLoggedIn);
    alert(`Welcome, ${this.props.username} your work is saved`);
    return (
       <Router>
        <div className="welcome-user">
          <ul className="welcome-nav">
            <li>Welcome, {this.props.username}</li>
            <li onClick={this.props.logOut}><Link to="/logOut">Log Out</Link></li>
          </ul>

          <Route path="/logOut" exact strict component={MainHeader}/>
        </div>
       </Router>
    );
  }
}

export default WelcomeUser;
