import { useState } from "react";
import { Unit } from "../styles/Projects.styled";
import spinner from "../assets/spinner.gif";

const Project = ({id,image,name,link,tool,source}) => {
  const [loaded, setLoaded] = useState(false);
  const onImageLoaded = () => {
    setLoaded(true);
  };
  
  return (
    <Unit>
        <h3>{name}</h3>
        <img src={loaded ? `./images/${image}.PNG` : spinner} alt={name} onLoad={onImageLoaded} />
        <a href={source} target="_blank" rel="noopener noreferrer" >Source Code</a> 
        <a href={link} target="_blank" rel="noopener noreferrer">Visit Page</a>
    </Unit>
  )
}

export default Project