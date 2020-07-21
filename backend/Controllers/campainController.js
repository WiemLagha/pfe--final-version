const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const nodemailer = require('nodemailer');
const Email = require('email-templates');

const fs = require('fs');
const path = require('path');


//const { ContactsList } = require('./../models/ContactsList');
const { User } = require('./../models/user');
const { mongoose } = require('./../db/config');
const { ObjectId } = require('mongodb');
const { Campaign } = require('../models/campaign');
const { getMaxListeners } = require('process');

var app = express();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'laghawiem98@gmail.com',
        pass: 'mypassword123'
    }
});

const email = new Email({
    transport: transporter,
    send: true,
    preview: false,
});


app.get('/', (req, res) => res.status(200).send('welcome to campaigns controller'))


app.post('/addCampaign', (req, res) => {
    let data = req.body;
    let id = data._listeContacts;
    let template = data._emailTemplate.html;
    console.log(id);

    let campaign = new Campaign({
        campaignName: data._campaignName,
        subject: data._subject,
        name: data._name,
        email: data._email,
        listeContacts: data._listeContacts,
        emailTemplate: data._emailTemplate.html,
        dateEnvoi: data._dateEnvoi
    });

    campaign.save().then((campaignFromDb) => {
        res.status(200).send({
            "message": "campagne insérée avec succès"
        })
    }).catch((error) => {
        res.status(400).send(error);
    })



})

//html= data._emailTemplate.html;
//console.log(html);


app.get('/campaignsList', (req, res) => {
    Campaign.find({}).then((list) => {
        let campaignsList = [];
        for (let index = 0; index < list.length; index++) {
            campaignsList.push(list[index]);
            //console.log(list[index]);
        }
        res.status(200).send({ campaignsList })


    })
})


app.delete('/delete/:id',(req,res)=>{
    let _id=req.params.id;
    Campaign.findByIdAndRemove  ({_id}).exec().then((campaignFromDB)=>{
        res.status(200).send({"message":"deleted!"})
    }).catch((error)=>{       //error object
        res.status(400).send(error);
    })
})


app.post('/sendemail', (req, res) => {

    data = req.body;
    let id = data._listeContacts;
    ContactsList.find({ id }).then((list) => {
        contacts = list.contacts;
        console.log(contacts);
        for (let index = 0; index < list.contacts.length; index++) {
            email.send({
                template: template,
                message: {
                    from: 'laghawiem98@gmail.com',
                    to: contacts[index],
                }
            }).then(() => console.log('email has been sent!'));
        }


    })
    

})




module.exports = app;