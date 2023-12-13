import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URI ='mongodb+srv://contactApp:LMHA1237PRal9DHe@cluster0.vjrxq6q.mongodb.net/?retryWrites=true&w=majority'

const Connection = async()=>{
    try {

        await mongoose.connect(URI,{useNewUrlParser:true});
        console.log("connected to the database");
        
    } catch (error) {

        console.log("not connected to database",error.message);
        
    }
}

export default Connection;