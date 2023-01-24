import { Button } from '@mui/material'
import React,{useEffect} from 'react'
import "./styles.css";
import AOS from "aos";
import {Rate} from "antd";
const Videos = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <>
    <h2 className='text text-center h2 my-5'>Why choose Sandeepani</h2>
    <div className="fourth-part-wrapper-background my-5"></div>
      
    
    <div className='fourth-part-wrapper container-fluid'>
      
      <div className='left-side'>
        <div className='first'>
        <div className='fourth-part-left-side-card' data-aos="fade-up">Total Students 2000+</div>
       <div className='fourth-part-left-side-card' data-aos="fade-up">Quality Education</div>
       
        </div>
      <div className='second'>
       <div className='fourth-part-left-side-card' data-aos="fade-up">Better Result Every Year</div>
       <div className='fourth-part-left-side-card' data-aos="fade-up">Highly Professional Faculty</div>
      
       </div>
       <div className='third'>

       <div className='fourth-part-left-side-card' data-aos="fade-up">Best Curriculum</div>
       <div className='fourth-part-left-side-card' data-aos="fade-up">Reasonable fee</div>
        
       </div>
      </div>
      <div className='right-side' data-aos="fade-up">
      <img src="video-streaming.png" alt="video" className='col-lg-6 img img-thumbnail'/>
      <Button variant='contained' className='mt-5' data-aos="fade-up">Watch video</Button>
      </div>
    </div>
    </>
  )
}

export default Videos