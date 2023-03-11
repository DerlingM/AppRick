//const Favoritos = require("../utils/Favoritos")
const {Favorite} = require('../DB_connection')

/* const getFav =  ((req,res)=>{
 res.status(200).json(Favoritos)
 
}); */
const getFav =  async (req,res)=>{
    try {
      const favorite = await  Favorite.findAll();
      if(!favorite.length)return res.status(404).json({message:'no favorites yet'});
    
      return res.status(200).json(favorite)
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
    
   };

module.exports = getFav;