import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/backendhulk';

mongoose.connect(url, {seNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB conectada')
});