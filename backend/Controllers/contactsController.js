const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const fs = require('fs'); 
const path= require('path');

const { User } = require('./../models/user');
const { mongoose } = require('./../db/config');
const { ObjectId } = require('mongodb');
const { ContactsList } = require('./../models/contactsList');
const { Console } = require('console');

var app = express();



app.get('/',(req,res)=>res.status(200).send('welcome to contacts controller'))


//Ajouter utilisateur
app.post('/addContactsList', (req, res) => {
    let data = req.body;
    console.log(data._contacts);

    let list = new ContactsList({
        name: data._name,
        contacts: data._contacts,
        dateAjout: data._dateAjout
    });
    console.log(list);

    list.save().then((listFromDb) => {
        res.status(200).send({
            "message": "utilisateur inséré avec succès"
        })
    }).catch((error) => {
        res.status(400).send(error);
    })
    
})

app.get('/contactsList', (req, res) => {
    ContactsList.find({}).then((lists) => {
        let contactsList = [];
        for (let index = 0; index < lists.length; index++) {
            contactsList.push(lists[index]);   
            //console.log(lists[index]);
        }
        res.status(200).send({ contactsList })


    })
})

app.delete('/deleteList/:id',(req,res)=>{
    let _id=req.params.id;
    ContactsList.findByIdAndRemove  ({_id}).exec().then((ListFromDB)=>{
        res.status(200).send({"message":"deleted!"})
    }).catch((error)=>{       //error object
        res.status(400).send(error);
    })
})


module.exports = app;