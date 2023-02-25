const Favoritos = require("../utils/Favoritos")


const getFav =  ((req,res)=>{
 res.status(200).json(Favoritos)
   console.log(Favoritos , 'esto es de getfav')
});

module.exports = getFav;