const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')

// DotENV config
require("dotenv").config();

// CORS
app.use(cors()); // Enable All CORS Requests

const server = http.createServer(app);

app.use('/about', (req, res) => {
  res.send('Hello there! This is Schooler server!');
});

const port = process.env.PORT || 4848;

server.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}...`
  );
});