import mongoose from "mongoose";

export const connectDB = async() =>{
    const DB = `mongodb://mongo:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5875`
    try {
        await mongoose.connect('mongodb://mongo:j7bch1OkkbIatS4W5QFz@containers-us-west-149.railway.app:5875')
        console.log(">>>>DB is connected")
    } catch (error) {
        console.log(error)    
    }
}


