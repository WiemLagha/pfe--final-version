const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    login:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required: true,
        default: "user"
    },
    dernierModif:{
        type: String
    }
});


const User=mongoose.model('user',UserSchema);
module.exports={User};