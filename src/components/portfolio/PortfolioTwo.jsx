import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import { HashLink } from 'react-router-hash-link';

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section shane_tm_section_mod" id="portfolio">
    <SimpleReactLightbox>
        <div className="shane_tm_portfolio shane_tm_portfolio_mod">
          <div className="container">
            <div className="positon-relative">
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                
                   <div className="portfolio_list portfolio_list_mod">
                    <SRLWrapper>
                      
                    <div id='layout' class="layout layout--collage">
                                                <Reveal effect="fadeInUp">  
                              <div className="inner innersquare">
                                <div className="entry shane_tm_portfolio_animation_wrap cardgreeting">
                                    <h3>
                                    WHAT BRING YOU TO US TODAY?
                                    </h3>
                               </div>
                                <div className="entry shane_tm_portfolio_animation_wrap cardaction cardaction1">
                                <HashLink smooth to="/#instruction">
                                <p>
                                    Join The Team
                                    </p>
</HashLink>
                                 

                                </div>
                        
                              </div>
                            </Reveal>
                         
                          {/* End single image block */}

                     
                          <Reveal effect="fadeInUp">  
                              <div className="inner innersquare">
                                <div className="entry shane_tm_portfolio_animation_wrap cardaction cardaction2">
                                  <a href="/img/portfolio/33.jpg">
                                    <img
                                      src="/img/portfolio/ticket.png"
                                    />
                                      <p>
                                    (Coming Soon)
                                    </p>
                                  </a>
                                </div>
      
                              </div>
                            </Reveal>
                       
                          {/* End single image block */}
                          </div>
                          <div id='layout' class="layout layout--collage">
                          <Reveal effect="fadeInUp">  
                              <div className="inner innersquare2">
                                <div className="entry shane_tm_portfolio_animation_wrap cardaction cardaction3">
   
                                  <HashLink smooth to="/#calendar">
                                <p>
                                 View Upcoming Events
                                    </p>
</HashLink>
                                </div>
            
                              </div>
                            </Reveal>
                         
                          {/* End single image block */}
                    
                          </div>
                      
                        {/* End portfolio list */}
                   
            
                        <div id='layout' class="layout layout--collage">
                        <Reveal effect="fadeInUp">  
                            <div className="inner innersquare3">
                              <div className="entry shane_tm_portfolio_animation_wrap cardaction cardaction4">
                                <a href="https://give.wcvolleyball.com/#/donate">
                                    <p>
                                    Make A Donation
                                    </p>
                                </a>
                              </div>
                
                            </div>
                            </Reveal>
               
                          {/* End single image block */}

                          <Reveal effect="fadeInUp">  
                            <div className="inner innersquare3">
                              <div className="entry shane_tm_portfolio_animation_wrap cardaction cardaction5">
                                <a href="https://sponsor.wcvolleyball.com">
                                    <p>
                                    Become A Sponsor
                                    </p>
                                </a>
                              </div>
      
                            </div>
                            </Reveal>
                       
                          {/* End single image block */}
                
                        {/* End portfolio list */}
                        </div>

               
                 
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
              
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>   
    </div>
  );
};

export default PortfolioTwo;
