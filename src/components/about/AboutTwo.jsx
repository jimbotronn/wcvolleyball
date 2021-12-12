import React from "react";
import { HashLink } from 'react-router-hash-link';

const About = () => {
  return (
    <>
      <div className="shane_tm_section shane_tm_section_about shane_tm_section_sponsor" id="instruction">
        <div className="shane_tm_about2">
          <div className="container">
            <div className="positon-relative">
             <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left aboutustext">
                    <span>Join The Team</span>
                  </div>
                </div>
                <div class="mcc_section calendarsection">
                  <div className="text mission invest">
                  <div class="sponsoricon"><img src="./img/about/WCHS.png" alt="Team Logo"/><h3>Keeping Up with Us </h3></div>
                                      <p class="sponsorbody">Whether you are a future student, a current student, or parents, we offer a few different ways for you to stay in the know</p><p class="sponsorbutton">
                       </p>
                   </div>
                   <div className="text challenge calendarchallenge"><p>
                        <ul>
                          <li><b><p className="highlighttext">Future Student & Parents</p></b><p class="sponsorbody">You can subscribe to our <HashLink smooth to="/#calendar">team calendar</HashLink> and come watch some of our games.</p></li>
                          <li><b><p className="highlighttext">Current Student & Parents</p></b><p class="sponsorbody">All you need to do is join our team on <a href="https://westerville-oh.finalforms.com/">FinalForms</a>.  Upon completing the registration, you will receive
                          an email invitation to join our communication portal.</p> </li>
                        </ul> 
                        <br></br><br></br>
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
