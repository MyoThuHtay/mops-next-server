const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./auth_api');

const PORT = 3000;
const server = express();
const DB = 'mongodb+srv://mops:Lpsemmth123@cluster0.ncbt4tc.mongodb.net/?retryWrites=true&w=majority'  ;

server.use(express.json());
server.use(authRouter);
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(() => {
    console.log('connection Successful');
}).catch(e => { console.log(e) });

server.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});

const config = {
        type: "experimental-background",
      };

module.exports =config;




