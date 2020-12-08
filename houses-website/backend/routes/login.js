const express = require('express');
const router = express.Router();
let Registration = require('../models/registration');

router.route('/login').post((req, res) =>{
    const Username = req.body.username;
    const Password = req.body.password;
    //console.log(Username,Password)
    Registration.find({username: Username})
        .then(data=>{
            if(data[0].password == Password){
                res.json({st:"Successfull"});
            }
            else{
                res.json({st:"Unsucessfull"});
            }
        }).catch(err => res.json({st:"Not found!"}))});
module.exports = router;