const express = require('express');
//const mongoose = require('mongoose')
const errorMiddleware = require('./routes/middleware/error.ejs');

const indexRouter = require('./routes/index');

const app = express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.use(errorMiddleware);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:1234@cluster0.w55jcql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`server running on port ${PORT}`)