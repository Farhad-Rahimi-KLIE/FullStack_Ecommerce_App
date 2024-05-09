const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    username : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
});

const CategoryMoodel = mongoose.model("users", CategorySchema);

module.exports = CategoryMoodel;