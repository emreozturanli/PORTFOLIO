import styled from 'styled-components';

const StyledAbout = styled.article`
  margin: auto;
  max-width:1100px;
  padding:0 2rem;
  div{
    margin: 2rem auto;
    border-top: 1px solid gray;
    width: 90%;
  }

  p{
    text-align:center;
    font-size:1.2rem;
    margin-bottom:1rem;
    line-height:2rem;
  }

  h3{
    text-align:center;
    margin-bottom:1rem;
    color:#1284d6;
    text-decoration:underline;
  }
  ul{
    text-align:center;
    li{
        padding: 1rem 0 0;
    }
  }

`;

export default StyledAbout;
