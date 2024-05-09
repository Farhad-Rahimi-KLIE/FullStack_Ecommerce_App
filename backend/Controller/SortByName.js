const Gallery = require("../Models/Gallery")
class SortByName {
    static sortName = async (req, res)=>{
        try {
        const getAllImage = await Gallery.find().sort("title");
        if (getAllImage) {
            return res.status(200).json({message : "All Image Fetch it", getAllImage})
        }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
    static sortPrice = async (req, res)=>{
        try {
        const getAllImage = await Gallery.find().sort("price");
        if (getAllImage) {
            return res.status(200).json({message : "All Image Fetch it", getAllImage})
        }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
}

module.exports = SortByName;