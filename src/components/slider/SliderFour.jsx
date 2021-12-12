import React from "react";
import { HashLink } from 'react-router-hash-link';




const Slider = () => {

  return (

    <div className="slider-four">
      <div className="shane_tm_hero shane_tm_slider_left" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{
              background: `transparent`,
            }}
          ></div>
          
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap name_wrap3">
              <h3>
                <span>
                  HOME OF THE<br></br>
                  WARHAWKS 
                  <br />
                </span>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="name_wrap2">
              <h2>            
                <span className="loop-text">
                Hello there<br></br>Welcome to our site!                 
              </span></h2>

            </div>
            {/* End designation */} 
            <HashLink className="white-fill-bg btn-outline btn-medium " smooth to="/#about">
            Learn More About Us
            <span className="overlay_effect"></span>
</HashLink>


            
            
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
    
  );
};

export default Slider;
