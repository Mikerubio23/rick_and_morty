import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { Routes, Route } from 'react-router-dom'


import characters, { Rick } from './data.js'
import About from './components/about/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/Error.jsx'
import Form from './components/Form/Form.jsx'
import Card from './components/card/Card'
import SearchBar from './components/shearchbar/SearchBar'

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  const username = "ejemplo@gmail.com";
  const password = '1password';

  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);


  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  function onClose(id) {
    setCharacters(characters.filter(char => char.id !== id));
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID");
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  function logout(){
    setAccess(false);
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {useLocation.pathname !== '/' && <Nav onSearch={onSearch} random={random} logout={logout}/>}

        <Routes>
          <Route exact path='/' element={<Form login={login} />} />
          <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/detail/:detailId' element={<Detail />} />
          <Route exact path='*' element={<Error />} />
        </Routes> */
      </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div>

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
