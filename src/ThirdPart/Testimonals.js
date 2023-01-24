import React, { useEffect } from "react";
import "./styles.css";
import TestimonialsCard from "./TestimonialsCard";
import AOS from "aos";
const Testimonals = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  });
  return (
    <>
      <div className="container-fluid mb-5 ">
        <div className="third-part-wrapper container mt-5">
          <h3 className="text-center mb-5" data-aos="fade-up">
            Success Stories
          </h3>
          <div className="row testimonials">
            <div className="col-lg-4 mt-3 " data-aos="fade-up">
              <TestimonialsCard name="person1" comment="This is my sample comment" />
            </div>

            <div className="c mt-3 col-lg-4 " data-aos="fade-up">
              <TestimonialsCard name="person2" comment="This is my sample comment" />
            </div>

            <div className="col-lg-4 mt-3" data-aos="fade-up">
              <TestimonialsCard name="person3" comment="This is my sample comment" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonals;
