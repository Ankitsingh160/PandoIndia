
// import required Libraries
import mongoose from "mongoose";

//User schema
const schema = new mongoose.Schema({
    fname:{
        type:String,
        require: [true,"Please enter your first name!"],
    },
    lname:{
        type:String,
        require: [true,"Please enter your Last name!"],
    },
    email:{
        type:String,
        require: [true,"Please enter your email!"],
    },
    address:{
        type:String,
        require: [true,"Please enter the address!"],
    },
    phone:{
        type:String,
        require: [true,"Please enter the phone number!"],
    }
});





export const User = new mongoose.model('User',schema);
