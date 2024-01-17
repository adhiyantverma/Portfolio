import "./intro.scss"

import React from 'react';
// eslint-disable-next-line
import Typed from 'typed.js';

export default function Intro() {
  
  const el = React.useRef(null);

  React.useEffect(() => {
    // eslint-disable-next-line
    const typed = new Typed(el.current, {
      strings: ['Web-Developer', 'Designer', "Coder"],
      typeSpeed: 50,
      backDelay:1500,
      backSpeed:60
    });
    
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man3.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hii There, I' m</h2>
          <h1>Adhiyant Verma</h1>
          <h3>
            Passionate <span ref={el}></span>
          </h3> 
        </div>
        <a href="#portfolio">
          <img src="assets/down1.png" alt="" />
        </a>
      </div>
    </div>
  )
}
