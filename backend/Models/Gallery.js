const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
    title :{
        type : String,
    },
    description :{
        type : String,
    },
    price :{
        type : Number,
    },
    image : {
        type : String,
    },
    category : {
        type : String,
    }
});

const GalleryMoodel = mongoose.model("galleries", GallerySchema);

module.exports = GalleryMoodel;