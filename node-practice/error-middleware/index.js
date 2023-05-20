const express = require('express');
const app = express();

// Route handler
app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id;

  // Simulating an error condition
  if (userId === 'admin') {
    throw new Error('Access denied');
  }

  // Other code...
  res.json({ message: 'User retrieved successfully' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  // Handle the error
  console.error('inside error middleware ',err.message);

  // Set an appropriate status code and send an error response
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});