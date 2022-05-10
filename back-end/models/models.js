const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
});

const Blog = mongoose.model("devtooltables", blogSchema);

module.exports = Blog
