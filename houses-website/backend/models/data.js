const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataCsv = new Schema({
    area_type : { type : String, required : true },
    availability : { type : String, required : true },
    location : { type : String, required : true },
    size : { type : String, required : true },
    society : { type : String, required : true },
    total_sqft : { type : String, required : true },
    bath : { type : String, required : true },
    balcony : { type : String, required : true },
    price : { type : String, required : true }
});

const Data = mongoose.model('sellhouses', dataCsv);
module.exports = Data;