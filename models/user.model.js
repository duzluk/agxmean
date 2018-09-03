const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{
        type:String,
        maxlength:20,
        minlength:2,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:5
    },
    FirstName:String,
    LastName:String,
    Email:String,
    GsmNr:String,
    Roll:String,
    Authority:{
        Persons:[],
        Modules:[]
    }
},{
    collection:"Users"
});

const User=mongoose.model('User',userSchema);


module.exports = User;

