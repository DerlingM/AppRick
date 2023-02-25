import Card from './Card';

export default function Cards(props) {
   const { characters,onClose } = props;
   return(
   <div style={{display: 'flex',justifyContent: 'space-around'} }>   
{characters.map(char =><Card key={char.name}
name = {char.name}
species = {char.species}
gender = {char.gender}
image = {char.image}
onClose={()=>onClose(char.id)}
id = {char.id}

/>)}
      </div>
      ) 
}
