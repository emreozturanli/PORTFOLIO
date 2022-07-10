import { useState } from 'react'
import StyledProjects, { ProjectContainer, ButtonContainer } from '../styles/Projects.styled'
import { data } from '../helper/data'
import Project from '../components/Project'

const Projects = () => {
  const [datas,setDatas] = useState(data)

  const handleClick = (e) =>{
    setDatas(data.filter((item)=> item.tool === e.target.value))
  } 

  return (
    <StyledProjects>

      <ButtonContainer>
        <button onClick={handleClick} value='react'>REACT</button> 
        <button onClick={handleClick} value='javascript'>JAVASCRIPT</button> 
        <button onClick={handleClick} value='css'>CSS</button>
      </ButtonContainer>
      
      <ProjectContainer>
          {
            datas.map((project)=>{
              return <Project key={project.id} {...project}/>
            })
          }
      </ProjectContainer>

    </StyledProjects>
  )
}

export default Projects