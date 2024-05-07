import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async ()=> {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.lsbhkal.mongodb.net/?retryWrites=true&w=majority&appName=WhatsApp-Clone`;
    try{
        await mongoose.connect(URL);
        console.log("Database connected succesfully");
    } catch(error){
        console.log("Error while connecting Database:",error.message);
    }
}

export default Connection;