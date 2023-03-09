

import Cards from './components/Cards.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import { useLocation } from 'react-router-dom'
import Favorites from './components/favorites/Favorites.jsx'
function App () {
  const imagenexterna = 'https://images2.alphacoders.com/692/692166.jpg';
const location = useLocation();
const navigate = useNavigate();
const username = 'derling@mail.com';
const password = 'welin'
const [access, setAccess]= React.useState(false);
const [characters, setCharacters] = useState([])

function login(userData){
  if (userData.password === password && userData.username === username) {
    setAccess(true);
    navigate('/home');
 }
}
const onSearch = (character) =>{
  fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}
/* const example = {
  name: 'Morty Smith',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
}; */
const onClose=(id)=>{
setCharacters(characters.filter(char => char.id !== id))
}

useEffect(() => {
  !access && navigate('/');
}, [access]);
  return (
    
  <div >
    {location.pathname !=='/' &&  < Navbar onSearch={onSearch}/>}
     <Routes>
      <Route path='/' element={<Form login={login} /> } />
    <Route path='/home' element={<Cards  characters={characters} onClose={onClose}/>} />
<Route path='/about' element={<About/>} />
<Route path='/favorites' element={<Favorites/>} />
<Route path='/detail/:detailId' element={<Detail/>} />
<Route path='*' element={<Error/>}/>

    </Routes>
  </div>
   

 /*    <div  className='App' style={{backgroundImage : `url(${imagenexterna})` ,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover' ,padding: '25px' }}>
      <hr />
      <div><Navbar onSearch={onSearch} /> </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div> */
  )
}

export default App
