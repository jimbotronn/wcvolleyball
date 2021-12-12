import React from "react";
import { FaVolleyballBall, FaRoute } from  "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="shane_tm_section shane_tm_section_about " id="about" >
        <div className="shane_tm_about2" >
          <div className="container">
            <div className="positon-relative">
             <div className="shane_tm_title" >
                <div className="title_flex">
                  <div className="left aboutustext">
                    <span>About Us</span>
                  </div>
                </div>
                <div class="mcc_section">
                  <div className="text mission">
                  <h3><FaVolleyballBall/> Boys Volleyvall </h3>
                        <p>
                        Boys volleyball is a spring sport and it is one of the fastest growing high school sports in the nation.  Over the past five years, 
                        the participation rates in boys high school volleyball have risen 22%.  The growth is creating more 
                        opportunities at the collegiate level.                      <br></br><br></br> 
                        No prior playing experiences?  Don’t worry.  One of our best alumni players who plan to pursue a career as
                        a professional volleyball player in Europe started when he was in high school, too!                         </p>
                   </div>
                   <div className="text challenge">
                   <h3><FaRoute/> Our Team </h3>
                        <p>
                        Boys Volleyball is a club sport in Westerville School District.  Over the past decade, our program provide
                        student-athletes with the opportunity to excel in teamwork, sportsmanship, self-discipline, and moral character.
                        <br></br><br></br>
                        Our program is about students first.  We want student-athletes to learn to balance priorities by allowing them to 
                        be multi-sport athletes and participating in other extra-curricular activities.  We strive to enrich and support 
                        student-athletes by empowering players to collectively build an energetic, healthy, and competitive team environment.
                                                </p>  
                      
                   </div>
                  
                </div>
              </div>
             
            </div>
          </div>
          </div>
          {/* End container */}
      </div>
     
    </>
  );
};

export default About;
