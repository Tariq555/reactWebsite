const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3001; // Choose a port for your backend

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.post('/api/signup', (req, res) => {
  const { firstName, lastName } = req.body;
  // Save user data to a file (e.g., users.json)
  const userData = { firstName, lastName };
  fs.appendFileSync('users.json', JSON.stringify(userData) + '\n');
  res.status(200).json({ message: 'User data saved successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
