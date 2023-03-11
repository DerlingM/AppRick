import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters,onClose } = props;
   return(
   <div className={styles.container}>   
   <div className={styles.cards}>
   {characters.map(char =>
<Card key={char.name}
name = {char.name}
species = {char.species}
gender = {char.gender}
status = {char.status}
image = {char.image}
origin = {char.origin.name}
onClose={()=>onClose(char.id)}
id = {char.id}

/>)}
   </div>

      </div>
      ) 
}
