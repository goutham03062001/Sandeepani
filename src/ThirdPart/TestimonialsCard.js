import React from 'react'
import {Rate} from "antd";
const TestimonialsCard = ({name , comment}) => {
  return (
    <div className="card testimonials-card">
            <div className="card-body">
             <div className="card-top">
             <p className="text text-start text-info">{name}</p>
              <img src="student.jpg" class="img img-fluid student-image" alt="student-name"/>
             </div>
             <Rate defaultValue={5}/>
              <p className="text text-start text-dark mt-3">
                {comment}
              </p>
              <button type="primary" className=" my-btn mt-3 d-flex justify-content-center">View story</button>
            </div>
          </div>
  )
}

export default TestimonialsCard