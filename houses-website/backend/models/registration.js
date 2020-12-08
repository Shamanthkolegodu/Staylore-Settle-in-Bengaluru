const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    firstname : { type : String, required : true },
    lastname : { type : String, required : true },
    username : { type : String, required : true, unique : true, trim : true, minlength : 3 },
    password : { type : String, required : true, unique : true, minlength : 8 },
}, {
    timestamps:true,
});

const Register = mongoose.model('myusers', registerSchema);
module.exports = Register;