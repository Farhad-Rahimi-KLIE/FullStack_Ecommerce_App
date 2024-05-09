const Gallery = require("../Models/Gallery")

class Delete {
    static deleteItem = async (req, res)=>{
        const id = req.params.id;

        try {
            const userDelete = await Gallery.findByIdAndDelete({_id : id});
            return res.status(200).json({
                message : "User Delete Successfully",userDelete});
        } catch (error) {
            res.status(501).json({
                message : error.message
            })
        }
    }
}
module.exports = Delete;