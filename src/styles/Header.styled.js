import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 1rem 3rem;

    nav{
        max-width:1100px;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:50px;

        ul{
            flex-direction:column;
            align-items:center;
            justify-content:center;
            position:fixed;
            left:0;
            top:0;
            transform: scale(0);
            width:100%;
            height:100%;
            border: 30px solid #f5f0f09d;
            background-color: #b1d8f7 ;
            font-size: 2rem;
        
            li{
                padding:2rem;
                a{
                    color:#000;
                    text-decoration:none;
        
                    &:hover{
                        color:orangered;
                    }
                }
            }
        }

        .active{
            color:#1284d6;
        }

        .open{
        display:flex;
        transform: scale(1);
        transition: all .3s ease-in; 
        }

        @media (min-width:600px){
            span{
                display:none;
            }

            ul{
                display: flex;
                flex-direction:row;
                align-items:center;
                gap: 2rem;
                position:relative;
                transform: scale(1);
                width:max-content;
                height:max-content;
                background-color: transparent;
                margin:0;
                font-size: 1.4rem;
                border:none;
            
                li{
                    padding:0;
                    a{
                        color:#000;
            
                        &:hover{
                            color:orangered;
                        }
                    }
                }
            }
        }
    }
`;

export const Logo = styled.div`
    font-size:2.4rem;
    font-weight:700;

    a{
        color: #f17d10; 
    }

    & + span{
        cursor:pointer;
        color: #1284d6;
    }
`
export const StyledSpan = styled.span`
    position:absolute;
    right: 30px;
    top:30px;
    cursor:pointer;
    color: red;
`;

export default StyledHeader;
