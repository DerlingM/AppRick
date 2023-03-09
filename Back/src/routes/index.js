const { Router } = require("express");


const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
const getFav = require('../controllers/getFav.js');
const postFav = require('../controllers/postFav.js');
const deleteFav = require('../controllers/deleteFav');
const router = Router();


router.get("/rickandmorty/character/:id", getCharById);
router.get( "/rickandmorty/detail/:id", getCharDetail);
router.get('/rickandmorty/fav', getFav);
router.post('/rickandmorty/fav', postFav);
router.delete('/rickandmorty/fav/:id', deleteFav);

module.exports = { router }