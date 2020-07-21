const mongoose=require('mongoose');

const contactsListSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    contacts :{
        type: Array
    },
    dateAjout:{
        type:String
    }
});


const ContactsList=mongoose.model('contactsList',contactsListSchema);
module.exports={ContactsList};