const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://eswar:7993601838@cluster0.fz9gdzu.mongodb.net/?retryWrites=true&w=majority/placements', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err)
        console.log('Error connecting to database', err);
    else
        console.log('Connected to database');
});

module.exports = mongoose;