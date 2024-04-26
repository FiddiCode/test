import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    userName:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
},{timestamps:true});


const User=mongoose.model("User",userSchema);

export default User;