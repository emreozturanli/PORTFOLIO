import styled from 'styled-components';

const StyledHome = styled.main`
  text-align: center;
  padding: 2rem 1rem;
  max-width: 768px;
  height:80vh;
  margin: auto;

`;

export const Title = styled.section`
    h3{
        font-size: 7rem;
        padding:2rem;
    }

    @media (min-width:600px) {
      h3{
         font-size: 10rem;
        }
    }

`;
export const Text = styled.section`
    p{
      font-size:1.5rem;
      line-height:2rem;
    }

    @media (min-width:600px) {
      p{
        line-height:2.5rem;
      }
    }
`;



export default StyledHome;
