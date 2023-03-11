const { Character } = require('../DB_connection')


const getAllcharacter = async (req,res)=>{
    try {
        const allcharacter = await Character.findAll();
        return res.status(200).json(allcharacter);
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}


module.exports = getAllcharacter;