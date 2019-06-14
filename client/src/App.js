import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js'

class App extends Component {
state = {
    data: null
  };

/*
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

*/

render() {
  return (
    <div className="App">
    <h1>Math Sheet Generator </h1>
    <Form/>
    </div>
  );
}
}

export default App;
