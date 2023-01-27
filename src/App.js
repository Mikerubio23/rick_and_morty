import { useState } from 'react'

import './App.css'
import Cards from './components/cards/Cards.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
 

import characters, { Rick } from './data.js'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'

function App () {

  const [characters, setCharacters] = useState([]);

  // const example ={
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // }

  const onSearch = (character)=> {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
       });
  }

  const onClose = (id)=>{
    setCharacters(characters.filter(char => char.id !==id))
  }

  return (
    <div>
    <Navbar onSearch={onSearch}/>
    <Routes>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
      <Route path = '*' element={<Error/>}/>
    </Routes>
    </div>
    // <div className='App' style={{ padding: '25px' }}>
      
    //   <div>
    //     <Navbar onSearch={onSearch}/>
    //   </div>
    //   <div>
    //     <Cards
    //       characters={characters}
    //       onClose={onClose}
    //     />
    //   </div>
    // </div>
  )
}

export default App
