import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null
  };


    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = () => {
    fetch('http://localhost:3000/express_backend')
      .then(response => {
        console.log(response);
        return response.json();
      }).then(json => this.setState({
        data: json.express
      }),
      err => console.log(err))
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI();

  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
