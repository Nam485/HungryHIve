import React from 'react';
import './Header.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../assets/image/image1.webp";
import image2 from "../../assets/image/image2.webp";
import image3 from "../../assets/image3.png";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='header' data-aos="zoom-in">
      <Slider {...settings}>
        <div className="item">
          <img src={image1} alt="Image 1" />
          <div className="overlay"></div>
        </div>
        <div className="item">
          <img src={image2} alt="Image 2" />
          <div className="overlay"></div>
        </div>
        <div className="item">
          <img src={image3} alt="Image 3" />
          <div className="overlay"></div>
        </div>
      </Slider>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        {/* <button>View Menu</button> */}
      </div>
    </div>
  );
};

export default Header;
