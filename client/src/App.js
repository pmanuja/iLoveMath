import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js'
import Sheet from './components/Sheet.js'
import Options from './components/Options.js'
import SolveOnline from './components/SolveOnline.js'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import NewUser from './components/NewUser.js';
import LogIn from './components/LogIn.js';
import MainHeader from './components/MainHeader.js';
import WelcomeUser from './components/WelcomeUser.js';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
state = {
  testData:"",
    data:[],
    operation : "",
    showOptions: false,
    viewSheet:true,
    saveProgress:false,
    isSignUpOpen:false,
    isLogInOpen:true,
    showForm:false,
    showMain:true,
    isLoggedIn: false,
    loggedInUserName :"",
    isSolveOnline : false
  };

showSignUpBox =() =>{
  this.setState({
    isSignUpOpen :true,
    isLogInOpen :false

  });
}

showLogInBox =() =>{
  this.setState({
    isSignUpOpen :false,
    isLogInOpen : true

  });
}
// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = () => {
  fetch('https://math-sheet-generator.herokuapp.com/express_backend')
    .then(response => {
      console.log(response);
      return response.json();
    }).then(json => this.setState({
      testData: json.express
    }),
    err => console.log(err))
};

componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI();

}


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

showOptions = () => {
  this.setState({
    showOptions : true
  });
}

saveMyProgress = () =>{
  console.log('u clicked save my progress');
  this.setState({
    saveProgress:true
  });
}

genPDF = () =>{
  let page_section,HTML_Width,HTML_Height,top_left_margin,PDF_Width,PDF_Height,canvas_image_width,canvas_image_height;
   page_section = document.querySelector('#sheetdata');
   HTML_Width = page_section.clientWidth;
   HTML_Height = page_section.clientHeight;
   top_left_margin = 15;
   PDF_Width = HTML_Width + (top_left_margin * 2);
   PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
   canvas_image_width = HTML_Width;
   canvas_image_height = HTML_Height;
   console.log(`canvas_image_width ${canvas_image_width} , canvas_image_height ${canvas_image_height}`);

   this.createPDF(PDF_Width, PDF_Height,top_left_margin,HTML_Width, HTML_Height,canvas_image_width,canvas_image_height);

}

createPDF = (PDF_Width, PDF_Height,top_left_margin,HTML_Width, HTML_Height,canvas_image_width,canvas_image_height) => {

  let totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
  console.log(`total pages ${totalPDFPages}`);

  html2canvas(document.querySelector('#sheetdata'),{ allowTaint: true }).then(canvas => {
  canvas.getContext('2d');
  console.log(canvas.height+"  "+canvas.width);
  const imgData = canvas.toDataURL('image/png',1.0);
  let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
  pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, HTML_Width, HTML_Height);
  for (var i = 1; i <= totalPDFPages; i++) {
     pdf.addPage(PDF_Width, PDF_Height);
     pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
  }
  pdf.save("newSheet.pdf");
  });

}

solveOnline = () => {
  console.log("solve this sheet online");
  this.setState({
    isSolveOnline:true,
    viewSheet : false,
    showOptions:false
  });

  // let div1 = document.querySelector('#sheetdata');
  // let div2 = document.querySelector('#interactivePDF');
  //  div2.innerHTML = div1.innerHTML;

}
showForm = () => {
  this.setState({
    showForm : true,
    showMain:false
  });
}
closeLoginBox =()=>{
  this.setState({
    saveProgress: false
  });
}

reset = () => {
  this.setState({
    data:[],
    showOptions : false,
    viewSheet : true
  });
}

createUserSession = (username) =>{
  console.log("set user welcome ", username);
  this.setState({
    loggedInUserName: username,
    isLoggedIn : true,
    saveProgress: false
  });
}

logOut = () =>{
  console.log("log out clicked");

  fetch('https://math-sheet-generator.herokuapp.com/sessions', {
  body: JSON.stringify({"username":this.state.username, "password":this.state.password}),
  method: 'DELETE',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
  }).then(sessionDestroyed => {
    console.log("session destroyed");
  }).then(jsonedItem => {
    // whatever you want to do with the json data here
    console.log("session destroyed? - ", jsonedItem);

  }).catch(err => console.log(err))


  this.setState({
    isLoggedIn : false,
    showForm:false,
    showOptions:false,
    viewSheet:false,
    showMain : true,
    saveProgress: false,
    isSolveOnline:false
  });
}

render() {
  return (
    <div>
      <div>
        {this.state.isLoggedIn ?<WelcomeUser username={this.state.loggedInUserName} logOut={this.logOut} isLoggedIn={this.state.isLoggedIn}/> :"" }
      </div>
      <div>
        {this.state.showMain ? <MainHeader showForm={this.showForm}/> : ""}
      </div>
      <div className="app">

      {/*<h2>{this.state.testData}</h2>*/}

      {this.state.showForm?<Form showOptions = {this.showOptions} createSheet = {this.createSheet} /> : ""}
      {this.state.showOptions? <Options genPDF = {this.genPDF} solveOnline= {this.solveOnline} reset={this.reset}/> : ""}

      {this.state.viewSheet?
        <Sheet data = {this.state.data} operation = {this.state.operation}/>
      : [(this.state.isSolveOnline ? <SolveOnline data = {this.state.data} operation = {this.state.operation}  saveMyProgress={this.saveMyProgress} reset={this.reset} />
        : null)
        ]
      }
    {/*  {this.state.isSolveOnline ?
        <SolveOnline data = {this.state.data} operation = {this.state.operation}  saveMyProgress={this.saveMyProgress} reset={this.reset} />
        : null
      }*/}

      {this.state.saveProgress ?
          <div className ="root-container-auth">
            <div className="box-controller-auth">
              <div className="close-div"><button onClick={this.closeLoginBox}>[X]</button></div>
              <h3>Please Sign up or Log In to save your work</h3>
              <div className="controller-auth" onClick={this.showLogInBox}>
                Login
              </div>
              <div className="controller-auth" onClick={this.showSignUpBox}>
                Sign Up
              </div>
            </div>
            <div className ="box-container-auth">
              {this.state.isSignUpOpen? <NewUser/>:""}
              {this.state.isLogInOpen?<LogIn createUserSession = {this.createUserSession}/> : ""}
            </div>
          </div>
          : ""}

      </div>
    </div>
  );
}
}

export default App;
