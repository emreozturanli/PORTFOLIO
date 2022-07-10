import styled from 'styled-components';

const  StyledProjects= styled.section`
    max-width:1100px;
    margin: 0 auto 2rem;
`;

export const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0;
    button{
        padding:0.5rem 1rem;
        margin-inline:1rem;
        border: 3px solid #87bce4;
        border-radius: 5px;
        background-color:#ffffff;
        font-weight: 700;

        &:hover{
            background-color:#1284d6;
            color:#ffffff;
            cursor:pointer;
        }
    }
`; 
export const ProjectContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 1.5rem;

    @media (min-width:600px){
        flex-direction:row;
    }
`; 

export const Unit = styled.div`
    background-color: #e5eef3 ;
    padding:2rem 1rem ;
    border-radius:20px;
    box-shadow: 0 0 4px 2px #c9c5c5;
    
    h3{
        text-align:center;
        font-size:2rem;
        color: #1284d6;
    }

    img{
        display:block;
        width: 300px;
        height: 200px;
        object-fit:contain;
        margin: 1rem 0 2rem;
    }

    & > a{  
        padding:0.5rem 1rem;
        margin-inline:1rem;
        border: 1px solid #87bce4;
        border-radius: 5px;
        background-color:#ffffff;
        color:orange;
        font-weight: 700;

        &:hover{
            background-color:#1284d6;
            color:#ffffff;
            cursor:pointer;
        }

    }

`; 

export default StyledProjects;
