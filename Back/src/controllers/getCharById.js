const axios = require('axios');


const getCharById = async (req, res) => {
    const { id } = req.params;
    try {
      const info = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      let character = {
        id:info.data.id,
        name:info.data.name,
        image:info.data.image,
        gender:info.data.gender,
        species:info.data.species,
      };
      res.status(200).send(character);
    } catch (error) {
      res.status(400).send(err);
    }
  };


module.exports = getCharById