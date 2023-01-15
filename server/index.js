const express = require('express');
const next = require('next');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;
const dev = process.env.dev !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const DB = 'mongodb+srv://mops:Lpsemmth123@cluster0.ncbt4tc.mongodb.net/?retryWrites=true&w=majority';

app.prepare().then(() => {

    
    mongoose.set('strictQuery', true);
    const server = express();
    const routes = require('./api/auth_api');
    server.use(routes);

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.post('*', (req, res) => {
        return handle(req, res);
    });

    // server.post('/api/signup', (req, res) => {
    //     //const actualPage = './api/auth_api'
    //     //const queryParams = { req.body } 
    //     app.render(req, res)
    // })

    mongoose.connect(DB).then(() => {
        console.log('connection Successful');
    }).catch(e => { console.log(e) });

    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`Server listening on ${PORT}`);
    });
}).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});
// app.use(express.json());
// app.use(authRouter);
// mongoose.set('strictQuery', true);
// mongoose.connect(DB).then(() => {
//     console.log('connection Successful');
// }).catch(e => { console.log(e) });

// app.listen(PORT,"0.0.0.0", () => {
//     console.log(`connected at port ${PORT}`);
// });



