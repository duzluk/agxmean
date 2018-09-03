const express=require('express');
const bodyParser=require('body-parser');
const path = require('path');

const route = require('./routes');
const port=process.env.Port || 3000;
const app=express();

app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


//serving api routes
app.use('/api',route);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));  
  });

  // Add headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.listen(process.env.PORT || 3000,()=>console.log(`API running on localhost:${port}`))
