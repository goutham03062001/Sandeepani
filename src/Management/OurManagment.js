import React, { useEffect } from "react";
import "./styles.css";
import OurManagementCard from "./OurManagementCard";
import AOS from "aos";
const OurManagment = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
    });
  });
  return (
    <>
      <h3 className="text text-center mb-5 text-bold" data-aos="fade-up">
        Our Management
      </h3>
      <div className="our-management-background-image"></div>
      <div className="container">
        <div className="management-wrapper ">
          <div className="main-card" data-aos="fade-up">
            <OurManagementCard />
          </div>

          <div className="main-card" data-aos="fade-up">
            <OurManagementCard />
          </div>

          <div className="main-card" data-aos="fade-up">
            <OurManagementCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurManagment;
