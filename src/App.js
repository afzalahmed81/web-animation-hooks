import React, { useState, useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import heli from './heli.gif';

import "./App.css";


const App = () => {
  let imgRef = useRef(null);

  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation(
      TweenMax.to(imgRef, 10, {
        rotation: 360,
        repeat: -1
      }).pause()
    );
  }, []);



  return (
    
    
      <div className="App">  
      
      
                                 
      <header className="App-header">
      
      <h5>Simple web animation with react hooks, rotate the helicopter</h5>
        <img
          src={heli}
          alt={"heli-animation"}
          className="Rotating-Heli"
          
          ref={element => {
            imgRef = element;
          }}
        />
        
        <div>
          <button onClick={() => animation.play()}>Play</button>
          <button onClick={() => animation.pause()}>Pause</button>
          <button onClick={() => animation.reverse()}>Reverse</button>
        </div>

                  
      
          
       </header>
        
       </div>
      
    
    
  );
};

export default App;
