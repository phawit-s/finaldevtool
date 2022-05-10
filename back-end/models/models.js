const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    phonenumber: String,
    gender: String,
    name: String,
    surname: String,
    birthday: String,
    address: String,
    provice: String,
    district: String,
    subdistrict: String,
    zipcode: String,
    vaccinedate: String,
    vaccinetime: String,
    vaccinationcenter: String,
    vaccinetype:String,
});

const Blog = mongoose.model("registerdevtools", blogSchema);

module.exports = Blog
