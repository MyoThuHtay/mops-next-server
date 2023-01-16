const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./auth_api');

const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://mops:Lpsemmth123@cluster0.ncbt4tc.mongodb.net/?retryWrites=true&w=majority'  ;

app.use(express.json());
app.use(authRouter);
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(() => {
    console.log('connection Successful');
}).catch(e => { console.log(e) });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});



