const express = require('express');
const router = express.Router();
let Data = require('../models/data');
let Houses=[];
let m1=-20.16971849;
let m2=0.13162304;
let intercept_C=-49.24066516404562;
router.route('/price').post((req,res)=>{

    const bhk = (req.body.bhk); //x1
    const sq_ft = (req.body.sqfeet); //x2
    //console.log(bhk,sq_ft);
    price=((m1)*bhk)+((m2)*sq_ft)+(intercept_C); // y= (m1.x1) + (m2.x2) + c
    price=Math.floor(price);
    console.log("Predicted price is : "+price);
    for(var i=(price-2);i<=(price+2);i++){
    Data.find({price:i,size:bhk})
    //console.log(price)
        .then(houses=>{
            //console.log(houses)
            houses.forEach((ind_house)=>{
                Houses.push(ind_house)
            })
        })
        .catch(err=>res.status(400).json("Error:"+err));
    }
    res.json(Houses)
    Houses=[]
});

module.exports = router;