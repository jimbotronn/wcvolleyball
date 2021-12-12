import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="shane_tm_topbar">
        <div className={navbar ? "topbar_inner opened" : "topbar_inner"}>
          <div className="logo">
          <NavLink to="/">
              <img src="./img/logo/new/wclogo.png" alt="partners brand" />
              </NavLink>
              <h3 class="logoname">Westerville Central H.S. Boys Volleyball</h3>
         
          </div>
          {/* End logo */}
          <div className="menu">
            <Scrollspy
              className="anchor_nav"
              items={["about", "donate"]}
              currentClassName="current"
              offset={-200}
            >
              <HashLink className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="/#about">
              About Us
              </HashLink>
<HashLink className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="/#calendar">
              Calendar
              </HashLink>
              <a className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="https://give.wcvolleyball.com/#/donate">
              Donate
              </a>
              <a className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="https://sponsor.wcvolleyball.com">
              Sponsor
              </a>
            </Scrollspy>
          </div>
          {/* End menu */}
        </div>
      </div>
      {/* End shane_tm_topbar */}

      {/* Start shane mobile menu */}
      <div className="shane_tm_mobile_menu">
        <div className="topbar_inner">
          <div className="container bigger">
            <div className="topbar_in">
              <div className="logo">
                <NavLink to="/">
                  <img src="./img/logo/new/wclogo.png" alt="partners brand" />
                  <h3 class="logoname">Westerville Central H.S. Boys Volleyball</h3>
                </NavLink>
              </div>
              {/* End logo */}
              <div className="my_trigger" onClick={handleClick}>
                <div
                  className={
                    click
                      ? "hamburger hamburger--collapse-r is-active"
                      : "hamburger"
                  }
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
                {/* End hamburger menu */}
              </div>
            </div>
          </div>
        </div>
        <div className={click ? "dropdown active" : "dropdown"}>
          <div className="container">
            <span className="close_menu" onClick={handleClick}>
              close
            </span>
            <div className="dropdown_inner">
              <ul className="anchor_nav">
              <HashLink className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="/#about">
              About Us
              </HashLink>
<HashLink className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="/#calendar">
              Calendar
              </HashLink>
              <a className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="https://give.wcvolleyball.com/#/donate">
              Donate
              </a>
              <a className="white-fill-bg btn-outline btn_sm btn_gap headerlink" smooth to="https://sponsor.wcvolleyball.com">
              Sponsor
              </a>
 
              </ul>

              {/* End social share */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* End shane mobile menu */}
    </>
  );
};

export default Header;
