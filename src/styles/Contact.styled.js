import styled from 'styled-components';

const StyledContact = styled.div`
  margin: auto;
  padding:10rem 2rem;
  max-width: 1100px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap: 2rem;

  div{
    a{
        color: #1284d6;
        &:hover{
            color: orangered;
            cursor:pointer;
        }
    }
    
  }

  @media (min-width:768px) {
    
    justify-content:center;
  }
`;

export default StyledContact;
