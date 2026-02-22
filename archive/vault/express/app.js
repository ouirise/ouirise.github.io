const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

const { MongoClient } = require('mongodb');

// The connection string (URI)
const uri = process.env.MONGODB;

// The client instance
const client = new MongoClient(uri);

async function query(collection, next) {
  const db = client.db('ouirise')
  await next(db.collection(collection))

  await client.close();
}

// ROUTES

app.get('/', (req, res) => {
  return home(res)
});

app.get('/about', (req, res) => {
  return about(req, res)
})
app.post('/about', (req, res) => {

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



// ENDPOINTS

async function home(res) {
  return res.sendFile(__dirname + '/routes/index.html');

  return query('users', async (collection) => {
    if (collection.findOne({ name: '0KK' })) {
      return res.sendFile(__dirname + '/routes/index.html');
    }

    // CRUD
    await collection.insertOne({ name: '0KK', role: 'admin' });
  })
}
  
async function about(req, res) {
    if (req.params.password === 'professor oak') {
      
    } else {
      res.sendFile(__dirname + '/routes/about.html');
  }
}  
