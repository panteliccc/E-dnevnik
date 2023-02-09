const mongoose=require("mongoose")

const logInSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Users=new mongoose.model('Users',logInSchema)

module.exports=Users