// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = 5000; // You can use any port you prefer

app.use(bodyParser.json());

// Connect to MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  const db = client.db(dbName);
  const collection = db.collection('users');

  // Endpoint for signup
  app.post('/api/signup', (req, res) => {
    const { firstName, lastName } = req.body;

    // Insert user data into the database
    collection.insertOne({ firstName, lastName }, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Failed to insert data' });
        return;
      }
      res.json({ message: 'Signup successful' });
    });
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
