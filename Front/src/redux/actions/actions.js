import { DELETE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./types.js";
import axios from 'axios'
export function addFavorite(fav){
    console.log(fav)
    return async function(dispatch) {
        try {
            let character = await axios.post('http://localhost:3001/rickandmorty/fav', fav)
        console.log('character solo',character)
            dispatch({
            type: ADD_FAVORITE,
            payload: character.data
        })
        } catch (error) {
           // console.log(fav)
            throw new Error(error)
        
        }
      
    }
}

/* export function deleteFavorite(id){
    console.log(id)
    return async function(dispatch){
        try {
            let characterDelete = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
           
           console.log(characterDelete)
            dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
           
        } catch (error) {
            throw new Error(error)
        }
    }
} */
export const   deleteFavorite= (id) => {
    console.log(id)
    return async function (dispatch) {
      try {
        const chartDelete=await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        console.log(chartDelete.data)
            dispatch({
              type: DELETE_FAVORITE,
              payload: id,
            });
      } catch (error) {
        throw Error(error)
      }
    };
  };
export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}

export function getFavorites(){
    return async function(dispatch){
        try {
            const character = await axios.get('http://localhost:3001/rickandmorty/fav')
        console.log("actions getfavorites",character)
            return dispatch({
            type : "GET_FAVORITE",
            payload : character.data
        })
        
        } catch (error) {
            
        }
    }
}

