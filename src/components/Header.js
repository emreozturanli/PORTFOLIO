import {useState} from 'react'
import StyledHeader, { Logo, StyledSpan } from '../styles/Header.styled'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { NavLink,Link} from 'react-router-dom'

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)

  return (
    <StyledHeader>
        <nav>
            <Logo><Link to='/'>emre</Link></Logo>
            <span>
                <GiHamburgerMenu 
                onClick={()=> setIsOpen(true)} 
                size={30} 
                />
            </span>

            <ul className={isOpen && 'open'}>
                
                <StyledSpan onClick={()=> setIsOpen(false)} >
                    <AiOutlineClose size={30} />
                </StyledSpan>

                <li><NavLink to='/projects' onClick={()=> setIsOpen(false)}>Projects</NavLink></li>
                {/* <li><NavLink to='/gallery' onClick={()=> setIsOpen(false)}>Gallery</NavLink></li>
                <li><NavLink to='/blog' onClick={()=> setIsOpen(false)}>Blog</NavLink></li> */}
                <li><NavLink to='/about' onClick={()=> setIsOpen(false)}>About</NavLink></li>
                <li><NavLink to='/contact' onClick={()=> setIsOpen(false)}>Contact</NavLink></li>

            </ul>
        </nav>
    </StyledHeader>
  )
}

export default Header