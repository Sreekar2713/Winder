const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : "string",
    password : "string"
});

module.exports = userSchema;