import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb://mongo:GTEIkW0Nng791e6ComdB@containers-us-west-190.railway.app:6982')
        console.log(">>>>DB is connected")
    } catch (error) {
        console.log(error)    
    }
}


