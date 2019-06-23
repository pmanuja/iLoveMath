//require express
const express = require('express');
console.log(express);
const path = require('path')
console.log(path);

//express function
const app = express();
// require mongoose as we are unsing connection to mongo
const mongoose = require('mongoose');
//require session as we need to hold user session after authentication
const session = require('express-session');
const port = process.env.PORT || 3000;

//middleware for CORS error
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(session({
    secret:'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());

//get route
app.get('/express_backend', ( req, res )=>{
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const userController = require('./controllers/user_controller.js')
app.use('/users', userController);

const sessionController = require('./controllers/session_controller.js');
app.use('/sessions', sessionController);
//listner
app.listen(port,() => {
  console.log("express server running on port 3000");
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/math-sheet-generator', {useNewUrlParser:true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})
