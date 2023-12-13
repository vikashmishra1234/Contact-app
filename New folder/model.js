import mongoose, { model } from "mongoose";

const userSchema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    }
});

export default mongoose.model('user',userSchema)

// module.exports = mongoose.model('user',userSchema);