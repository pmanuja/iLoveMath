//require express
const express = require('express');
console.log(express);
const path = require('path')
console.log(path);

//express function
const app = express();

const port = process.env.PORT || 3000;

//middleware for CORS error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))


//get route
app.get('/express_backend', ( req, res )=>{
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

//listner
app.listen(port,() => {
  console.log("express server running on port 3000");
});
