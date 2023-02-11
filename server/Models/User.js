const mongoose=require("mongoose")

const User=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Users=new mongoose.model('Users',User)

module.exports=Users