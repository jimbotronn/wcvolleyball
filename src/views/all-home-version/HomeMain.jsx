import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFour";
import About from "../../components/about/About";
import Sponsor from "../../components/about/AboutTwo";
import Portfolio from "../../components/portfolio/PortfolioTwo";
import Brand from "../../components/Brand";
import Footer from "../../components/footer/Footer";
import Calendar from "../../components/Calendar";


const HomeTwo = () => {
  return (
    <div className="home-four">

      <Header />
      {/* End Header Section */}
      <div className="shane_tm_section">
      <div className="shane_tm_about2"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "/img/video/1.png"
                    })`,

                  }}
      >
        <div className="container">
        <div className="position-relative position-flex">
      <Slider />
    

      {/* End Slider Section */}
       {/*<Product />*/}
      <Portfolio />
      </div></div></div></div>
      <About />
      {/* End About Section */}
      <div className="shane_tm_section section_accent">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
                            
              <Brand />
            </div>
          </div>
        </div>
      </div>

      
      <Sponsor />

      <Calendar />
      
      {/*<Skills />*/}

      



      {/* End shane_tm_partners */}


      {/* End  shane_tm_testimonials*/}


      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeTwo;
