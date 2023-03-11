const Favoritos = require('../utils/Favoritos')
 const{Favorite} = require('../DB_connection.js')
/* const postFav = (req, res) =>{
    const character = req.body;
    if(!character ){
        res.status(400).json({error: "No se recibieron los parámetros necesarios para crear el favorito"})
    }else{
    
        Favoritos.push(character)
        console.log('favorito agregado', Favoritos)
        res.status(200).json(character)
    }  
} */

const postFav = async(req, res) =>{
    try {
        const {id,name,status,species,gender,origin,image} = req.body;  
        console.log(req.body)
    if(!id || !name || !status || !species || !gender || !origin || !image){
        return res.status(404).json({message:'Complete all fields'})
    }
const favorito = await Favorite.create({
    id,
    name,
    status,
    species,
    gender,
    origin,
    image
})
return res.status(200).json(favorito)

    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}
/* app.post('/rickandmorty/fav',(req,res)=>{
    const {id, name, species,gender,image} = req.body;
    if(!id || !name || !species || !gender || !image ){
        res.status(400).json({error: "No se recibieron los parámetros necesarios para crear la publicación"})
    }else{
        const newFav ={
            id : id,
            name: name,
            species : species,
            gender: gender,
            image : image
        }
        fav.push(newFav)
        res.status(200).json(newFav)
    }  
}) */
module.exports = postFav