const express = require("express");
const GalleryController = require("../Controller/GalleryController");
const router = express.Router();
const upload = require("../Middlewares/Image");
const GetFourProduct = require("../Controller/getFour");
const SortByName = require("../Controller/SortByName");
const Search = require("../Controller/SeachById");
const Authentecation = require("../Controller/Authentecartion");
const Delete = require("../Controller/deleteItem");
// const checkuserauthecated = require('../Middlewares/authMiddlewares');

// Authentecation Routes
router.post("/register", Authentecation.Register)
router.post("/login", Authentecation.Login)

// Ecommmerce Routes
router.post("/addimage", upload.single("image"), GalleryController.addImage);
router.get("/getallimage", GalleryController.getAllImage);
router.get("/getfour", GetFourProduct.getfor);
router.get("/getsigleimage/:id", GalleryController.getSingleImage);
router.get("/sortname", SortByName.sortName);
router.get("/sortprice", SortByName.sortPrice);
router.get("/search/:key", Search.searchById);
router.get("/SingleCategoy", Search.SingleCategory);
router.get("/delete/:id", Delete.deleteItem);


module.exports = router;