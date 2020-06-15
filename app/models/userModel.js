const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var userInfoSchema = new Schema({
    name:String,
    dateOfBirth:Date,
    sex:String,
    department:String,
    salary:Number,
    resume:String,
    // createdat: new Date()

});
const userInfo= mongoose.model('ntyDB',userInfoSchema,'ntyDB');
module.exports = { userInfo };