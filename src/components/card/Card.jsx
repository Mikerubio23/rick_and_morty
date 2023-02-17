// import styled from './Card.module.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivCard = styled.div`
   display: inline-block;
   background-color: darkslateblue;
   border-radius: 10px;
   color: white;
   overflow: hidden;
   margin: 25px 0px 25px 0px;
`;

const Button = styled.button`
   position: relative;
   right: -120px;
   top: 10px;
   background-color: pink;
   color: purple;
   border: 0px;
   width: 30px;
   height: 30px;
   border-radius: 5px;
   font-weight: bold;
   font-size: 15px;
`;

const styleSpecie = {
   // display:'inline-block',
   fontsize: '16px',
   color: 'violet',
   marginRight: '15px',
   marginTop: '-10px',
}

const styleGender = {
   // display:'inline-block',
   fontsize: '16px',
   color: 'deeppink',
   marginTop: '-10px',
}



export default function Card(props) {
   return (
      <DivCard className={StyleSheet.card}>
         <Button onClick={props.onClose}>X</Button>
         <Link to={`/detail/${props.id}`}><title>{props.name}</title></Link>
         <h2>{props.name}</h2>
         <div style={{display:'flex', justifyContent: 'space-evenly'}}>
            <h2 style={styleSpecie}>{props.species}</h2>
            <h2 style={styleGender}>{props.gender}</h2>
         </div>
         <img  src={props.image} alt="img no found" />
      </DivCard>
   );
}
