import { Unit } from "../styles/Projects.styled";

const Project = ({id,image,name,link,tool,source}) => {
  return (
    <Unit>
        <h3>{name}</h3>
        <img src={`./images/${image}.PNG`} alt={name} />
        <a href={source} target="_blank" rel="noopener noreferrer" >Source Code</a> 
        <a href={link} target="_blank" rel="noopener noreferrer">Visit Page</a>
    </Unit>
  )
}

export default Project