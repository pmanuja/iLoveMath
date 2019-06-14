//require express
const express = require('express');
console.log(express);

//express function
const app = express();

const port = process.env.PORT || 3000;

//middleware for CORS error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//listner
app.listen(port,() => {
  console.log("express server running on port 3000");
});

//get route
app.get('/express_backend', ( req, res )=>{
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
