const express = require('express');
const userRoutes = express.Router();

let User = require('./user.model');

//add data to DB
userRoutes.route('/add').post(function (req,res){
    let user = new User(req.body);
    user.save()
        .then(()=>{
            res.status(200).json({'user':'user added successfuly'})
        })
        .then(()=>{
            res.status(400).send('Unable to save');
        });
});

module.exports = userRoutes;