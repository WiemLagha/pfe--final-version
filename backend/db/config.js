const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/mailingDB",    //uri
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }   //options
)

module.exports = { mongoose };