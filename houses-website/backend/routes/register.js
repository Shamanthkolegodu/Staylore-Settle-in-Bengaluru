const router = require('express').Router();
let Register = require('../models/registration');

router.route('/add').post((req,res)=> {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;
    const reenterpw = req.body.reenterpw;
    
    const newuser = new Register();
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.username = username;
    newuser.password = password;
    // if (password.length >= 8 && (password == reenterpw)){
    //     newuser.save()
    //         .then(()=> res.json("registered"))
    //         .catch(err=> res.status(500).json('ERROR:'+err));
    // }
    // else if (password.length < 8) {
    //     res.json({s2:"Minimum length = 8"})
    // }
    // else if(password != reenterpw){
    //     res.json({s1:"Password do not match"})
    // }
    if (password.length >= 8 && (password == reenterpw)){
    newuser.save()
        .then(()=> res.json("registered"))
        .catch(err=> res.status(500).json('ERROR:'+err));
    }
    else if(password.length< 8){
        res.json({s2:"Minimum Length = 8"})
    }
    else {
        res.json({s1:"Password do not match"})
    }
});

module.exports = router;