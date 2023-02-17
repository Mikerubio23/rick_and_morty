import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Detail(){

    const {character, setCharacter }= useState({
      name:"",
      status:"",
      specie:"",
      gender:"",
      origin:"",
      image:""
    });

    const { detailId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
                name:char.name,
                status:char.status,
                specie:char.specie,
                gender:char.gender,
                origin:char.origin.name,
                image:char.image,
              });
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <Link to='/home'><button onClick={()=>navigate('/home')}>To Home</button></Link>
            <div>
              {character.name && <p><b>Name:</b>{character.name}</p>}
              {character.status && <p><b>Status:</b>{character.status}</p>}
              {character.specie && <p><b>Specie:</b>{character.specie}</p>}
              {character.gender && <p><b>Gender:</b>{character.gender}</p>}
              {character.origin && <p><b>Origin:</b>{character.origin}</p>}
            </div>
            <img src={character.image} alt='not found'/>
        </div>
    )
}