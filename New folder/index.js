import  Express  from "express";
import router from './Router.js';
import cors from 'cors';
import bodyParser from "body-parser";


import Connection from "./db.js";

const app = Express();

const PORT = 4000;

app.use(cors());
app.use(Express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser : true }));

app.use('/api',router);




Connection();
app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`);
})