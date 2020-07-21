const mongoose=require('mongoose');

const CampaignSchema= new mongoose.Schema({
    campaignName:{
        type:String,
        required: true
    },
    subject:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        default: "user"
    },
    listeContacts:{
        type: String
    },
    emailTemplate:{
        type: Object
    },
    dateEnvoi:{
        type:String
    }
});


const Campaign=mongoose.model('campaigns',CampaignSchema);
module.exports={Campaign};