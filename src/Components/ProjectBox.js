import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    PhotoStudioDesc : "Professionals, their families, and other clients will be catered to in this photo studio in order to capture and showcase the significant moments in their lives. In order to maintain their images current, we shall build a relationship in which we make the calls. They will be notified by email when their images become available as free downloads on our website.",
    PhotoStudioGithub : "https://github.com/ReigneRaven/Photo-Studio.git",
    PhotoStudioWebsite : "https://photo-studio-six.vercel.app/",

    JeepCityDesc : "To assist you in navigating Dagupan City, JeepCity offers free maps and real-time directions. View timetables, routes, and schedules to see the cost and travel time to various locations in Dagupan City in real time.",
    JeepCityGithub : "https://github.com/ReigneRaven/JeepCity.git",

    PortfolioDesc:"This digital portfolio serves as an online platform for the work I have produced as well as the knowledge and expertise that relate to my area of interest. It also provides a background of myself, my interests, and a glimpse into my creative side.",
    PortfolioGithub:"https://github.com/ReigneRaven/Ravens-Portfolio.git",
    PortfolioWebsite:"https://ravens-portfolio.vercel.app/"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox