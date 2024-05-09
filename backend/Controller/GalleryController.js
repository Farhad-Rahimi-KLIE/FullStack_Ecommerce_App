const Gallery = require("../Models/Gallery")
class GalleryController {
    static addImage = async (req, res)=>{
        const {title, description, price, category} = req.body;
        try {
            if (title, description, price, category) {
                const addimage = await Gallery.create({
                    title : title,
                    description : description,
                    price : price,
                    image : req.file.filename,
                    category : category,
                })
                if (category) {
            return res.status(200).json({message : "Porduct Added Successfully",addimage})
                }
            } else {
            return res.status(400).json({message : "All Fields Required"})
            }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
    static getAllImage = async (req, res)=>{
        try {
        const getAllImage = await Gallery.find({});
        if (getAllImage) {
            return res.status(200).json({message : "All Image Fetch it", getAllImage})
        }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
    static getSingleImage = async (req, res)=>{
        const {id} = req.params;
        try {
            if (id) {
                const getAllImage = await Gallery.find({_id : id})
                if (getAllImage) {
            return res.status(200).json({message : "All fetch it", getAllImage})
                }
            } else {
            return res.status(400).json({message : "All Fields Required"})
            }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
}

module.exports = GalleryController;