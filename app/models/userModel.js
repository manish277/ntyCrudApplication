const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var userInfoSchema = new Schema({
    name:String,
    dateOfBirth:String,
    sex:String,
    department:String,
    salary:Number

});
const userInfo= mongoose.model('ntyDB',userInfoSchema,'ntyDB');
module.exports = { userInfo };