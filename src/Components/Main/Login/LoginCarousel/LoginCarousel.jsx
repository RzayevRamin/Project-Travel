import React from 'react'
import './LoginCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LogImg1 from "../../../../assets/LoginCarousel/Login1.jpg";
import LogImg2 from "../../../../assets/LoginCarousel/Login2.jpg";
import LogImg3 from "../../../../assets/LoginCarousel/Login3.jpg";
import LogImg4 from "../../../../assets/LoginCarousel/Login4.jpg";
import LogImg5 from "../../../../assets/LoginCarousel/Login5.jpg";
import LogImg6 from "../../../../assets/LoginCarousel/Login6.jpg";
import LogImg7 from "../../../../assets/LoginCarousel/Login7.jpg";
import LogImg8 from "../../../../assets/LoginCarousel/Login8.jpg";

function LoginCarousel() {
  return (
    <div className='loginCarousel'>
      <Carousel 
        autoPlay={true}
        interval={6000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        stopOnHover={false}
        swipeable={false}>
        <div className="img1">
          <img src={LogImg1} alt="Img1" />
        </div>
        <div className="img2">
          <img src={LogImg2} alt="Img2" />
        </div>
        <div className="img3">
          <img src={LogImg3} alt="Img3" />
        </div>
        <div className="img4">
          <img src={LogImg4} alt="Img4" />
        </div>
        <div className="img5">
          <img src={LogImg5} alt="Img5" />
        </div>
        <div className="img6">
          <img src={LogImg6} alt="Img6" />
        </div>
        <div className="img7">
          <img src={LogImg7} alt="Img7" />
        </div>
        <div className="img8">
          <img src={LogImg8} alt="Img8" />
        </div>
      </Carousel>
    </div>
  )
}

export default LoginCarousel
