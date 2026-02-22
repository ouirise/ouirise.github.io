const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

const { MongoClient } = require('mongodb');

// The connection string (URI)
const uri = process.env.MONGODB;

// The client instance
const client = new MongoClient(uri);

// Connect
async function run(res) {
  await client.connect();
  
  // Use database
  const db = client.db('ouirise');
  const collection = db.collection('users');
  
  if (collection.findOne({ name: '0KK' })) {
    return res.sendFile(__dirname + '/routes/index.html');
  }
  
  // CRUD
  await collection.insertOne({ name: '0KK', laps: 24 });
  
  // Close
  await client.close();
}

app.get('/', (req, res) => {
  return run(res)
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});