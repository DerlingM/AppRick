let Favoritos = require('../utils/Favoritos')
const {Favorite} = require('../DB_connection.js')
/* app.delete('/rickandmorty/fav/:id',(req,res)=>{
    const {id} = req.params;
    if(!id){
        res.status(400).json({error: "No se recibió el id del personaje  a eliminar"})
    }
    else {
        const Perfind = fav.filter(post => post.id !== id)
        if(Perfind.length === fav.length){
            res.status(400).json({error: "No se recibió el id correcto necesario para eliminar la publicación"})
        }
        else{
            fav= Perfind;
            res.status(200).json({ success: true })
        }
    } 
}) */
/* const deleteFav = (req,res) =>{
    const {id} = req.params;
    console.log(Favoritos, ' delete')
    if(!id){
        res.status(400).json({error: "No se recibió el id del personaje  a eliminar"})
    }
    else {
        const Perfind = Favoritos.filter(post => post.id !== id)
        console.log(Perfind)
        if(Perfind.length === Favoritos.length){
            res.status(400).json({error: "No se recibió el id correcto necesario para eliminar el favorito"})
        }
        else{
            Favoritos= Perfind;
            res.status(200).json(Favoritos)
        }
    }
} */
// esta manera sirve para eliminarlo en manera local
/* const deleteFav = (req, res) => {
    const {id} = req.params;
    console.log(id)
    if(id){
        let charIndex = Favoritos.findIndex(charac => charac.id === Number(id));
        Favoritos.splice(charIndex,1)
           console.log(Favoritos)
           return res.status(200).json(Favoritos)
    }
   return res.status(400).send("no hay nada")
} */

//elimina el favorito de la base de datos
const deleteFav = async (req, res) => {
   try {
    const {id} = req.params;
    const favoritedeleted= await Favorite.findByPk(id)
    if(!favoritedeleted)  return res.status(404).json({message: `There is not character with id ${id}`})
  favoritedeleted.destroy()
  return res.status(200).json({message:'Favorite deleted successfully'})
} catch (error) {
    return res.status(404).json({message: error.message})
   }
}

module.exports = deleteFav