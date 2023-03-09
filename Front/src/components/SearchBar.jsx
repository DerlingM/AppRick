import { useState } from "react";
import style from './searchbar.module.css'
export default function SearchBar(props) {

const [character,setCharacter] = useState("")

const handleChange = e =>{
   const {value} = e.target
setCharacter(value)
}
   return (
      <div className={style.content_buscador} >
          
          
         <input type='search' placeholder="Buscar" onChange={handleChange} />
         <button onClick={()=>props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
