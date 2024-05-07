import express from 'express';
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from localhost:3000
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specified HTTP methods
    credentials: true, // Allow sending cookies with the requests
};

app.use(cors(corsOptions));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Route);

Connection();

const PORT = 8000;

app.listen(PORT, ()=> console.log(`Server running at PORT ${PORT}`));