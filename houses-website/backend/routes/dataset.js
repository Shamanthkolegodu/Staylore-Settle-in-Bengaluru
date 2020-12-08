const express = require('express');
const router = express.Router();
let Data = require('../models/data');

router.route('/').post((req,res)=>{
    console.log(req.body)
    const Location = req.body.location;
    console.log(Location)
    Data.find({location:Location})
        .then(houses => {res.json(houses);})
        .catch(err => res.status(400).json('Error:'+err));
});
router.route('/sellhouse').post((req,res)=>{
    const area_type = req.body.area_type;
    const availability = req.body.availability;
    const location = req.body.location;
    const size = req.body.size;
    const society = req.body.society;
    const total_sqft = req.body.total_sqft;
    const bath = req.body.bath;
    const balcony = req.body.balcony;
    const price = req.body.price;
    
    const houseforsale = new Data();

    houseforsale.area_type = area_type;
    houseforsale.availability = availability;
    houseforsale.location = location;
    houseforsale.size = size;
    houseforsale.society = society;
    houseforsale.total_sqft = total_sqft;
    houseforsale.bath = bath;
    houseforsale.balcony = balcony;
    houseforsale.price = price;
    houseforsale.save() 
        .then(()=>res.json('House added to sell'))
        .catch(err=> res.status(500).json('Error:'+err));
});


module.exports = router;