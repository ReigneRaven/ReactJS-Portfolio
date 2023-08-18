import React from 'react';
import ProjectBox from './ProjectBox';
import RavenPortfolioImage from '../images/RavenPortfolioImage.png';
import JeepCityImage from '../images/JeepCityImage.png';
import PhotoStudioImage from '../images/PhotoStudioImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RavenPortfolioImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={JeepCityImage} projectName="JeepCity" />
        <ProjectBox projectPhoto={PhotoStudioImage} projectName="PhotoStudio" />
      </div>
    </div>
  )
}

export default Projects