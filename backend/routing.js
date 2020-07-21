const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { ContactsList } = require('./models/contactsList');

const user= require('./Controllers/userController');
const contacts= require('./Controllers/contactsController');
const campaigns=require('./Controllers/campainController');
//const campaign = require('./Controllers/campaingnController');
//const contact= require('./Controllers/contactsController');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/public', express.static('public'));

app.use('/user',user);
app.use('/contacts',contacts);
app.use('/campaigns',campaigns);


app.get('/', (req, res) => res.status(200).send('welcome to the server'))
/*
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
*/
app.listen(3000, () => console.log('server started'))