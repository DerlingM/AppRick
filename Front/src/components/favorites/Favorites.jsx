import { connect } from "react-redux"
import styled from './favorite.module.css'
import  Card  from "../Card";
import { orderCards, filterCards, getFavorites } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import { useEffect } from "react";

export function Favorites ( props ){
    const {myFavorites,onClose} = props
console.log(myFavorites)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getFavorites());
        console.log("props de favorites",props)
    },[])

    const handleDispatch = (e) => {
        const { name, value } = e.target;

        if(name === 'order'){
            return dispatch(orderCards(value))
        }
        if(name == 'filter'){
            return dispatch(filterCards(value))
        }
    }

    return(
        <div className={styled.contain} >
            <div>
                <select name='order' onChange={handleDispatch}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select name='filter' onChange={handleDispatch}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

<div className={styled.container} >
    <div className={styled.cards}>
    {myFavorites.length?myFavorites.map(fav => 
                <Card
                key={fav.id}
                name={fav.name}
                id={fav.id}
                gender={fav.gender}
                image={fav.image}
                onClose={()=>onClose(fav.id)}
                />
            ): <h1>No hay favoritos</h1>}
    </div>

</div>
         
        </div>
    )
}


export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    
    }
}

export default connect(mapStateToProps, null)(Favorites)