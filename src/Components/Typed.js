import React from 'react';
import {FaGithub} from "react-icons/fa";
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <div className='GithubProfile'>
      <Typewriter
        options={{
          strings: ['Web Developer', 'Graphic Designer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
    <a href="https://github.com/DevanshSahni"><FaGithub/></a></div>

  )
}

export default Typed
