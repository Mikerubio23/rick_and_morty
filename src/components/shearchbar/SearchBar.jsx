import { useState } from 'react';
import styled from 'styled-components';

const styleInput ={
   marginRight: '15px',
   padding: '10px',
   borderRadius: '5px',
}

const styleButton ={
   backgroundColor: 'pink',
   color: 'purple',
   border: '0px',
   borderRadius: '5px',
   fontWeight: 'bold',
   fontSize: '15px',
   padding: '10px',
   margin: '25px 0px 25px 0px'
}

export default function SearchBar(props) {

   const [character, setCharacter] = useState("")

   const handleSearch = (e)=> {
      const {value} = e.target;
      setCharacter(value)
   }

   return (
      <div className='input'>
        <input style={styleInput} type='search' onChange={handleSearch}/>
        <button style={styleButton} onClick={()=> props.onSearch(character)}>Agregar</button>
        <button style={styleButton} onClick={props.random}>Random Character</button>
      </div>
   ); 
}
// placeholder='Buscar' onChange={handleChange}