const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const fs = require('fs'); 
const path= require('path');

const { User } = require('./../models/user');
const { mongoose } = require('./../db/config');
const { ObjectId } = require('mongodb');

var app = express();


app.get('/', (req, res) => res.status(200).send('welcome to contacts controller'))

//Ajouter utilisateur
app.post('/addUser', (req, res) => {
    let data = req.body;
    //Cryptage du mot de passe
    data._password = bcrypt.hashSync(data._password, 10);
    let user = new User({
        name: data._name,
        login: data._login,
        password: data._password,
        dernierModif: data._dernierModif
    });

    user.save().then((userFromDb) => {
        res.status(200).send({
            "message": "utilisateur inséré avec succès"
        })
    }).catch((error) => {
        res.status(400).send(error);
    })
    
})


//Se connecter
app.post('/login', (req, res) => {
    let data = req.body;
    let email = data._login;
    let password = data._password;
    User.findOne({ email }).then((userFromDb) => {
        if (!userFromDb) {
            res.status(404).send({
                "message": "email incorrect"
            })
        }
        let compare = bcrypt.compareSync(password, userFromDb.password);
        if (!compare) {
            res.status(404).send({
                "message": "password incorrect"
            })
        }
        let token = jwt.sign({ idUser: userFromDb._id }, "key")
        res.status(200).send({ token })
    }).catch((error) => {
        res.status(400).send(error);
    })
})

//Lister les utilisateurs
app.get('/usersList', (req, res) => {
    User.find({role:"user"}).then((users) => {
        let usersList = [];
        for (let index = 0; index < users.length; index++) {
            usersList.push(users[index]);   
            //console.log(users[index]);
        }
        res.status(200).send({ usersList })


    })
})

//Supprimer un utilisateur
app.delete('/delete/:id',(req,res)=>{
    let _id=req.params.id;
    User.findByIdAndRemove  ({_id}).exec().then((UserFromdb)=>{
        res.status(200).send({"message":"deleted!"})
    }).catch((error)=>{       //error object
        res.status(400).send(error);
    })
})



module.exports = app;