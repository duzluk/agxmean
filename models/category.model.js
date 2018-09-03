const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const CategorySchema=new Schema({
    Code:{
        type:String,
        require:true,
        unique:true,
        maxlength:21
    },
    Title:{
        type:String,
        maxlength:[201,'{PATH} alanı maksimum {MAXLENGTH} karakter olabilir.({VALUE})'],
        minlength:[2,'{PATH} alanı minimum {MINLENGTH} karakter olabilir.({VALUE})']
    },
    IsDeleted:{
        type:Boolean,
        default:false
    },
    IsActive:{
        type:Boolean,
        default:true
    }
},{
    collection :'Categories'
});

const Category=mongoose.model('Category',CategorySchema)

module.exports=Category;