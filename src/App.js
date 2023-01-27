import React from 'react';
import WelcomePage from './FirstPart/WelcomePage';
import Branches from './SecondPart/Branches';
import Testimonals from './ThirdPart/Testimonals';
import Videos from "./FourthPart/Videos";
import Navbar from "./Navigation/Navbar";
import Footer from './Footer/Footer';
import OurManagment from './Management/OurManagment';
// import Carousel from "./Carousel/Carousel"
const App = () => {
  return (
    <div>
      <Navbar/>
      
      <WelcomePage/>
      
      <Branches/>
      <OurManagment/>
      <Videos/>
      <Testimonals/>
      <Footer/>
    </div>
  )
}

export default App