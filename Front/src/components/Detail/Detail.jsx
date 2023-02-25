import React from "react";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";



  
export default function Detail(){
  console.log("detailId");
    const [character,setCharacter] = useState({})
const {detailId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
           
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return(
        <div>
   <h1>{character.name}</h1>
        <h1>{character.status}</h1>
        <h1>{character.specie}</h1>
        <h1>{character.gender}</h1>
        <h1>{character.origin?.name}</h1>
        <img src={character.image} alt='not found' />
        </div>
     
    )
}