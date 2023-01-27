import React, { useEffect } from "react";
// import {Button} from "@mui/material"
import AOS from "aos";
import "./styles.css";
const WelcomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <>
    <div class="first-part-background"></div>
      <div class="main-wrapper" >
      <div className="left-part" data-aos="zoom-in-up">
        <h3>Welcome To <span id="brand">Sandeepani</span> Educational Institutions</h3>
        <bold >Where education reaches to everyone</bold>
        <bold > Let's learn together and make the difference</bold>
        <br/>
        <br/>
        <p> &nbsp;
        <span>Sandeepani </span> <span>&nbsp;|</span> <span>Sree Sandeepani</span> &nbsp;| <span>Aryabhatta</span> <span> &nbsp;|</span> <span>Sri Bharathi</span>
        </p>
        {/* <div className="navigate-buttons">
          <Button variant="contained">Get Started</Button>

          <Button variant="contained" color="secondary">about us</Button>

        </div> */}
      </div>
      <div className="right-part" data-aos="fade-up">
        <img src="top-image.png" className="top-image" alt="college"/>
        
      </div>
    </div>
    </>
  );
};

export default WelcomePage;
