const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
});

const Blog = mongoose.model("registerdevtools", blogSchema);

module.exports = Blog
