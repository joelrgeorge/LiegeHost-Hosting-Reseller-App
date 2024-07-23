// mongoService.js

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGO_URI;

const logResponse = async (type, response) => {
    if (!uri) {
        throw new Error("MONGO_URI is not defined");
    }
    const client = new MongoClient(uri);
    try {
        console.log('Connecting to MongoDB...');
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('hosting'); // Replace 'hosting' with your actual database name if different
        let collectionName;

        // Determine the collection based on the type
        if (type === 'whmcs') {
            collectionName = 'whmcs_responses';
        } else if (type === 'enom') {
            collectionName = 'enom_responses';
        } else {
            throw new Error('Invalid response type');
        }

        const collection = database.collection(collectionName);
        const log = {
            type,
            response,
            timestamp: new Date(),
        };

        console.log('Logging response:', log); // Detailed log
        await collection.insertOne(log);
        console.log('Response logged successfully');
    } catch (error) {
        console.error('Error logging response:', error);
    } finally {
        try {
            await client.close();
            console.log('MongoDB connection closed');
        } catch (closeError) {
            console.error('Error closing MongoDB connection:', closeError);
        }
    }
};

module.exports = {
    logResponse,
};