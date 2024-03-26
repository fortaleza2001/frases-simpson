import styled from "styled-components";
import Character from "./Character"

export default function CharacterContainer(props) 
{
    const {characters,reqApi} = props
    return(<>
    <ContainerCharacter>
        {characters.map((character,index)=>(
            <Character datacharacter = {character} key={index} />
        ))}
        
    </ContainerCharacter>

    <ContainerButtom>  
        <Buttom onClick={()=> reqApi()}>Recargar Personajes</Buttom>
    </ContainerButtom>     
    </>
    );

};

const ContainerCharacter = styled.div`
    display: flex;
    flex-wrap: wrap; /* Asegura que los elementos se envuelvan en pantallas pequeñas */
    justify-content: center; /* Centra horizontalmente los elementos */
    gap: 20px; /* Espacio entre elementos */
`;


const ContainerButtom = styled.div`
    width: 100%;
    text-align: center;
   
    display: flex; /* Establece el contenedor como flex */
    justify-content: center; /* Centra horizontalmente los elementos */



`;

const Buttom = styled.button`
    width: 250px;
    background-color: #e76f51;
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    margin-top: 40px;
    transition: all 0.2s ease-out;

    &:hover{
        background-color: #1c0950;
        cursor: pointer;
    }



`;
