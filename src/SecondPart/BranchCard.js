import React from 'react'

const BranchCard = ({ title, desc}) => {
  return (
    <div className="card testimonials-card">
            <div className="card-body">
             <div className="card-top">
             <p className="text text-start text-info">{title}</p>
              <img src="student.jpg" class="img img-fluid student-image" alt="student-name"/>
             </div>
              <p className="text text-start text-dark mt-3">
               {desc}
              </p>
              <button type="primary" className="my-btn mt-3 d-flex justify-content-center">View College</button>
            </div>
          </div>
  )
}

export default BranchCard