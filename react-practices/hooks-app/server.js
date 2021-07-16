// server/index.js
const path = require('path');
const express = require('express');
const app = express();
const port = 4000;
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  console.log('hello from server')
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(port,()=>{
    console.log('Server is listening on port '+port)
})