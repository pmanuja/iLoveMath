import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js'
import Sheet from './components/Sheet.js'
import Options from './components/Options.js'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


class App extends Component {
state = {
    data:[],
    operation : "",
    show: false
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
generateRandomNumbersArray(min, max, count){
  console.log(min , max);
let randomArr = [];
  for(let i = 0; i < count; i++){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArr.push(num);
  }
  return randomArr;
}

createSheet = (params) => {
  console.log("create new sheet using" , params);
  //if level1 set min = 0 to max =10, generate randomNumbers
  //if level2 set min = 0 to max = 20
  //if level 3 min = 100 to max = 1000
  let min, max = 0;
  let count = parseInt(params.noOfQuestions);

  if(params.level === '1'){
    console.log("am i here?");
    min = 0;
    max = 10;
  }
  else if(params.level === '2'){
    min = 0;
    max = 20;
  }
  else if(params.level === '3'){
    min = 100;
    max = 1000;
  }
  let arr1 = this.generateRandomNumbersArray(min, max, count);
  let arr2 = this.generateRandomNumbersArray(min, max, count);
  let arr3 = arr1.map((ele, i ) => {
    return [ele, arr2[i]]
  })

  this.setState({
    data : arr3,
    operation : params.operation
  });
  console.log(arr3[1]);
}

show = () => {
  this.setState({
    show : true
  });
}


genPDF = () =>{
  html2canvas(document.querySelector('#sheetdata')).then(canvas => {
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm',[1000,800]);
  pdf.addImage(imgData, 'JPEG', 0, 0);
  pdf.save("newSheet.pdf");
});

}


render() {
  return (
    <div className="App">
    <h1>Math Sheet Generator </h1>
    <Form show = {this.show} createSheet = {this.createSheet} />
    {this.state.show ? <Options genPDF = {this.genPDF} /> : ""}
    <Sheet data = {this.state.data} operation = {this.state.operation}/>


    </div>
  );
}
}

export default App;
