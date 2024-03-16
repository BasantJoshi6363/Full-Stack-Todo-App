import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
dotenv.config(()=>{
    path : "./env"
})

const mongodb = process.env.MONGODB_URI;


export let connectionTODatabase = async()=>{
    try {
        await mongoose.connect(`${mongodb}`);
        console.log("database connection successful");
    } catch (error) {
        console.log(error);
    }
}