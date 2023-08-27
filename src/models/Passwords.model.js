import mongoose from "mongoose";

const  passwSchema = new  mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    user:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true
    },
    site:{
        type:String,
        required:true,
        trim:true,
    },
    status:{
        type:Number,
        required:true,
        trim:true,
    },
},{
    timestamps:true
})

export default mongoose.model('Pass',passwSchema);