import mongoose from "mongoose";

const customerSchema=mongoose.Schema({
    id:{
        type:String,
        // required:[true,"ID is required"]
    },
    name:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    credit:Number
},{timestamps:true});


const Customer=mongoose.model("Customer",customerSchema);

export default Customer;