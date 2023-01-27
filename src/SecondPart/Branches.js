import React, { useEffect } from "react";
import "./styles.css";
// import { Button } from "antd";
import BranchCard from "./BranchCard";
import AOS from "aos";
const Branches = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  const desc  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
  return (
    <>
      <h3 className="text-center mb-5" data-aos="fade-up">
        Our Branches
      </h3>

      {/* <div className=" Branches-background " data-aos="fade-up">
      
      </div> */}
      <div className="container-fluid branch-container">
        <div className="second-part-wrapper container">
          <div className="row testimonials mt-5">
            <div className="col-lg-4 mt-5 " data-aos="fade-up">
              <BranchCard
                title="Sandeepani Junior College"
                desc={desc}
              />
            </div>

            <div className=" mt-5 col-lg-4 " data-aos="fade-up">
              <BranchCard title="Sree Sandeepani Junior College" desc={desc}/>
            </div>

            <div className="col-lg-4 mt-5" data-aos="fade-up">
              <BranchCard title="Aryabhatta Junior College" desc={desc}/>
            </div>

            <div className="col-lg-4 mt-5" data-aos="fade-up">
              <BranchCard title="Sri Bharathi Junior College" desc={desc}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branches;
