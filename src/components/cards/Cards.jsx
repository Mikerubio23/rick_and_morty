import Card from '../card/Card';
import styles from './Cards.module.css';
import styled from 'styled-components';

const DivCards = styled.div`
   display: flex;
   justify-content: space-evenly;
`;

export default function Cards(props) {
   const { characters } = props;
   return (
      <DivCards className={styles.container}>
         {characters.length === 0 ?
         (<p style={{color: "violet", marginTop: "150px", fontSize: "24px"}}>
            !Busca un personaje!
         </p>)
         :
         characters.map(character => (
            <Card key={character.name}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               id={character.id}
               onClose={()=>props.onClose(character.id)}  
            />))
         }
      </DivCards>
   )
}
 