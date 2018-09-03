const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PersonSchema=new Schema({
    Code:{
        type:String,
        required:true,
        unique:true
    },
    TrCode:{
        type:String,
        required:true
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    EMail:{
        type:String
    },
    GsmNr:{
        type:String 
    },  
    IsActive:{
        type:Boolean,
        default:true
    },
    IsDeleted:{
        type:Boolean,
        default:false
    }
},
{
    collection:'Persons'
});

const Person=mongoose.model('Person',PersonSchema);

module.exports=Person;
