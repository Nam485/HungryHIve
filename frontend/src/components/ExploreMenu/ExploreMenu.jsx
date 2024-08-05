import React, { useEffect } from 'react';
import './ExploreMenu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 data-aos="fade-right">Explore our menu</h1>
      <p data-aos="fade-right" className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div 
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
            data-aos="zoom-in"
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p className={category === item.menu_name ? "active" : ""}>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
