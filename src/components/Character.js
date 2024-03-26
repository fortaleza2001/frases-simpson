import styled from "styled-components"
export default function Character(props) 
{
    const {datacharacter} = props;
    const {character,image,quote} = datacharacter;
    console.log(datacharacter)

    return(
        <ContentCharacter>
            <Title>{character}</Title>
            <ContainerImage>
                <Image src={image} alt={character} />
            </ContainerImage>

            <Quote>{quote}</Quote>
        </ContentCharacter>
   
    
    
    )

};

const ContentCharacter = styled.div`
    padding: 20px;
    border: 1px solid #2a9d8f;
    border-radius: 20px;
    width: 300px;
    text-align: center;
    margin: 10px;

    &:hover{
        filter: brightness(40%);
    }


`;

const Title = styled.h2`
    color: #264653;
    height: 40px;
    justify-content: center;
    align-content: center;
    display: flex;


`;

const ContainerImage = styled.div`
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;



`;

const Image = styled.img`
    width: 130px;
    height: auto;
   




`;

const Quote = styled.h4`

    height: auto;
    color: #2a9d8f;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 100; /* Muestra todas las líneas */
    -webkit-box-orient: vertical;
    max-height: 140px; /* Establece una altura máxima para el contenedor */
`;


