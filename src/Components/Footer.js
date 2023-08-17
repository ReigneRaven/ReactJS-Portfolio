import React from 'react';
import upang from '../images/upang.png';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={upang} alt="logo" height={100} width={100}/>
        <h4>Phinma- University of Pangasinan</h4>
        <p>Colllege of Information Technology</p>
      </div>
    </footer>
  )
}

export default Footer