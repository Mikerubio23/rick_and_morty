import styled from './Card.module.css';
import { Link } from 'react-router-dom';


const Button1 = styled.button`
   background-color: rgb(200,0,0);
   font-weight:bold
`;

export default function Card(props) {
   return (
      <div className={StyleSheet.card}>
         <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         <Link to={`/detail/${props.id}`}><title>{props.name}</title></Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="img no found" />
      </div>
   );
}
