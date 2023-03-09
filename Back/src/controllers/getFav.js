const Favoritos = require("../utils/Favoritos")


const getFav =  ((req,res)=>{
 res.status(200).json(Favoritos)
 
});

module.exports = getFav;