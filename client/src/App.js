import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js'
import Sheet from './components/Sheet.js'
import Options from './components/Options.js'
import SolveOnline from './components/SolveOnline.js'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


class App extends Component {
state = {
    data:[],
    operation : "",
    show: false,
    viewSheet:true
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
    viewSheet : false
  });

  // let div1 = document.querySelector('#sheetdata');
  // let div2 = document.querySelector('#interactivePDF');
  //  div2.innerHTML = div1.innerHTML;

}

render() {
  return (
    <div className="App">
    <h1>Math Sheet Generator </h1>
    <Form show = {this.show} createSheet = {this.createSheet} />
    {this.state.show ? <Options genPDF = {this.genPDF} solveOnline= {this.solveOnline}/> : ""}
    {this.state.viewSheet?<Sheet data = {this.state.data} operation = {this.state.operation}/> : <SolveOnline data = {this.state.data} operation = {this.state.operation}/>}

    </div>
  );
}
}

export default App;
