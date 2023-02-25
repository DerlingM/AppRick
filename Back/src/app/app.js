const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express();
const { router } = require('../routes/index');
const cors = require('cors')

/* app.use(express.json())
app.use(cors()); */
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));




app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //Autorizo recibir solicitudes de este dominio
   res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
   next();
});

app.use('/', router);
/* app.get('/rickandmorty/character/:id',(req,res)=>{
    const {id} = req.params;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.data)
    .then(resData =>{
    let character = {
        id : resData.id,
        name: resData.name,
        species : resData.species,
        gender : resData.gender,
        image : resData.image
     
        
    }
    res.status(200).send(character)
    }).catch(err => res.status(400).send(err) )
})
app.get('/rickandmorty/detail/:id',(req,res)=>{
    const {id} = req.params
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(responseData =>{
        let characterDetail ={
            name : responseData.name,
            status : responseData.status,
            species : responseData.species,
            gender : responseData.gender,
            origin : responseData.origin,
            image : responseData.image
        }
        res.status(200).send(characterDetail)
    }).catch(err => res.status(400).send(err))

}) */

/* app.get('/rickandmorty/fav',(req,res)=>{
res.status(200).json(fav);
}) */
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

module.exports = app;