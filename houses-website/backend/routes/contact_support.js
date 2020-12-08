const router = require('express').Router();
let Contact = require('../models/contact');

router.route('/support').post((req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.mesaage;
    console.log(req.body)
    const servermessage = new Contact();

    servermessage.name = name;
    servermessage.email = email;
    servermessage.message = message;
    servermessage.save()
        .then(()=> res.json("query accepted"))
        .catch(err=> res.status(400).json('ERROR:'+err));
});

module.exports = router;