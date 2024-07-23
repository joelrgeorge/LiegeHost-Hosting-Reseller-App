// testMongoConnection.js
const { MongoClient } = require('mongodb');

async function testConnection() {
  const uri = 'mongodb+srv://liegedevs:liegehost@liege0.uhdacom.mongodb.net/?retryWrites=true&w=majority&appName=LIEGE0'; // Replace with your MongoDB URI

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('MongoDB connection successful');
    await client.close();
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

testConnection();