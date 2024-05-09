class gtAllCategories {
    static getAllCategoryis = async (req, res)=>{
        try {
        const getAllImage = await Gallery.find({});
        if (getAllImage) {
            return res.status(200).json({message : "All Image Fetch it", getAllImage})
        }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
}

module.exports = gtAllCategories;