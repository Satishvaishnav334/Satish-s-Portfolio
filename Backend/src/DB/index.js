import mongoose from "mongoose";
import dotenv from 'dotenv'

const connectDB =async ()=>{
    try{
        const connectionString = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`${connectionString.connection.host}`)
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB;