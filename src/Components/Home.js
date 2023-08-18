import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Yahaloooo!</h1>
          <h1>I'M <b>REIGNE RAVEN</b></h1>
          <Typed/>   
        </div>
        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
      </div>

      <div className='EducationPage'>
        <div className='EducationText'>
          <h1 className='EducationTextHeading'>Brief <b>Overview</b></h1>
          <p>I adore the process of developing a simple concept into a website.  As a developer, I want to accomplish work that challenges me to achieve something I can be proud of.<br /><br />
            I am fluent in <b>Java</b> and I know a bit of <b>Python</b> and  I'm currently working on several projects. I intend to learn <b>Reactjs</b>, <b>Javascript</b> and<b> Tailwind Css</b> more in the near future. <br /><br />
            Also, I love <b>coffee</b> very much <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home