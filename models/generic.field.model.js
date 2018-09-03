const mongoose=require('mongoose');
const Schema=mongoose.Schema;

GenericFieldSchema=new Schema({
    Type: String,
    Caption: {
        type:String
    },
    Value: Schema.Types.Mixed,
    Options: [],
    IsActive:{
        type:Boolean,
        default:true
    },
    IsDeleted:{
        type:Boolean,
        default:false
    },
    ObservationHeadCode:String
    
},
{
    collection :'GenericFields'
});

const GenericField=mongoose.model('GenericField',GenericFieldSchema);

module.exports=GenericField;