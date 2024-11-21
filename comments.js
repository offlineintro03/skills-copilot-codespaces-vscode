// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Create a port
const port = 3000;

// Create a comments array
const comments = [
  { username: 'Alice', comment: 'I love your blog!' },
  { username: 'Bob', comment: 'Good job' },
];

// Use body parser
app.use(bodyParser.json());

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});