let Favoritos = require('../utils/Favoritos')

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

const deleteFav = (req, res) => {
    const {id} = req.params;
    console.log(id)
    if(id){
        let charIndex = Favoritos.findIndex(charac => charac.id === Number(id));
        Favoritos.splice(charIndex,1)
           console.log(Favoritos)
           return res.status(200).json(Favoritos)
    }
   return res.status(400).send("no hay nada")
}

module.exports = deleteFav