import styles from './Style/Style.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';
import { addFavorite,deleteFavorite } from '../redux/actions/actions';
export  function Card(props) {
   const[isFav ,setIsFav] = useState(false);
  

  function handleFavorite(){
if(isFav){
 
 props.deleteFavorite(props.id)
 setIsFav(false);
}else{
  props.addFavorite(props)
 
   setIsFav(true);
   
 
}
   }
   useEffect(() => {
      console.log("props de card",props)
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   return (
      <div className={styles.card}>
        {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
          <button onClick={()=> props.onClose(props.id)}>X</button>
       <Link to={`/detail/${props.id}`} ><h2 className= {styles.Title} >{props.name}</h2></Link>  
         <h2 className={styles.text} >{props.species} </h2>
         <h2 className={styles.text} >{props.gender} </h2>
         <img className={styles.image}  src={props.image} alt="img not found" /> 
      </div>
   );
}
export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}
export function mapDispatchToProps(dispatch){
return{
   addFavorite: function(fav){
      dispatch(addFavorite(fav))
   },
   deleteFavorite: function(id){
      dispatch(deleteFavorite(id))
   }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);