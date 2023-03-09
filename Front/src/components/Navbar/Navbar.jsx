
import React from "react";
import SearchBar from "../SearchBar";
import styled from "./Navbar.module.css"
import { Link } from "react-router-dom";
export default function Navbar({onSearch} ){
    return(
        <div className={styled.content_search} >
         <SearchBar   onSearch={onSearch}/>
         
            <Link className={styled.link} to='/about' >About</Link>
            <Link className={styled.link} to='/home' >Home</Link>
            <Link className={styled.link} to='/favorites' >Favorites</Link>
            
        </div>
    )
}
