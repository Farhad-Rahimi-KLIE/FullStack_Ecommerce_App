const Gallery = require("../Models/Gallery")
class Search {
    static searchById = async (req, res)=>{
        try {
        const getAllImage = await Gallery.find({
            "$or" : [
                {title : {$regex : req.params.key}}
            ]
        });
        if (getAllImage) {
            return res.status(200).json({message : "All Image Fetch it", getAllImage})
        }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
    static SingleCategory = async (req, res)=>{
        const {category} = req.query;
        try {
        const getAllImage = await Gallery.find({category});
        if (getAllImage) {
            return res.status(200).json({message : "All Image Fetch it", getAllImage})
        }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
}

module.exports = Search;