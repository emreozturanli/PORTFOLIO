import React from 'react'
import StyledContact from '../styles/Contact.styled'
import {FaLinkedinIn,FaGithub,FaRegEnvelope,FaCodepen} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'

const Contact = () => {
  return (
    <StyledContact>
      <div><a href="https://www.linkedin.com/in/emreozturanli/"><FaLinkedinIn size={40}/></a> </div>
      <div><a href="https://github.com/emreozturanli"><FaGithub size={40}/></a></div>
      <div><a href="mailto:emreozturanli1@gmail.com"><FaRegEnvelope size={40}/></a></div>
      <div><a href="https://medium.com/@emreozturanli"><BsMedium size={40}/></a></div>
      <div><a href="https://codepen.io/Emre-Ozturanli"><FaCodepen size={40}/></a></div>
    </StyledContact>
  )
}

export default Contact  