import React from 'react'
import styles from "./carousel.module.css";
import firstImage from "../Assets/firstItem.jpeg";
import secondImage from "../Assets/background-image.png"
const Carousel = () => {
  return (
    

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" className={styles.main_carousel_wrapper}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={firstImage} alt="firstItem"/>
    </div>
    <div className="carousel-item">
    <img src={secondImage} alt="firstItem"/>
    </div>
    <div className="carousel-item">
      <h3>Item 3</h3>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  )
}

export default Carousel