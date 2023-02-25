const Favoritos = require('../utils/Favoritos')

const postFav = (req, res) =>{
    const {id, name, species,gender,image} = req.body;
    if(!id || !name || !species || !gender || !image ){
        res.status(400).json({error: "No se recibieron los parámetros necesarios para crear el favorito"})
    }else{
        const newFav ={
            id : id,
            name: name,
            species : species,
            gender: gender,
            image : image
        }
        Favoritos.push(newFav)
        res.status(200).json(newFav)
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