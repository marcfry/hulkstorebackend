import mongoose from "mongoose";

const url = 'mongodb+srv://MarceloFrias:nightmare@hulkstore.mxyav.mongodb.net/test';

mongoose.connect(url, {seNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB conectada')
});