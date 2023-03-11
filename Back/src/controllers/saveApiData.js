const axios = require('axios');
const {Character} = require('../DB_connection.js')
const getApiData = async() => {

    try {
        let allCharacterInfoFull=[];
        for (let i = 1; i < 6; i++) {
           const apidata = axios(`https://rickandmortyapi.com/api/character?page=${i}`)
            allCharacterInfoFull.push(apidata)
        }//para obtener los 100 characters
        allCharacterInfoFull = await Promise.all(allCharacterInfoFull);
        let allCharacterInfoFull2 = allCharacterInfoFull.map(res => res.data.results.map(char =>{
           return{
            id : char.id,
            name: char.name,
            species: char.species,
            status: char.status,
            origin: char.origin.name,
            gender: char.gender,
            image: char.image
           } 
        }))
        let allcharacter = allCharacterInfoFull2.flat()
        console.log('respuesta',allcharacter)
        return allcharacter;
} catch (error) {
    return{error: error.message}
}
}
const saveApiData = async() =>{
    try {
       
        const characteAll = await getApiData();
        console.log('llego al apidata')
        await Character.bulkCreate(characteAll);

    } catch (error) {
        return {error : error.message}
    }
}
//getApiData();

module.exports = saveApiData;