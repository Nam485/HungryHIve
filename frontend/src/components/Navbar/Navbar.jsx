    import React, { useContext, useState, useEffect } from 'react';
    import './Navbar.css';
    import { assets } from '../../assets/assets';
    import { Link, useNavigate } from 'react-router-dom';
    import { StoreContext } from '../../context/StoreContext';

    const Navbar = ({ setShowLogin }) => {
        const [menu, setMenu] = useState("home");
        const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
        const navigate = useNavigate();
        const [prevScrollPos, setPrevScrollPos] = useState(0);
        const [visible, setVisible] = useState(true);

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollPos = window.pageYOffset;
                setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
                setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [prevScrollPos]);

        const logOut = () => {
            localStorage.removeItem("token");
            setToken("");
            navigate("/");
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };

        const handleOrder = () => {
            if (token) {
              navigate('/myorders');
            } else {
                alert("Please Login");
            }
          };

        return (
            <div className={`navbar ${visible ? '' : 'sticky'}`} onClick={scrollToTop}>
                <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => {setMenu("home")}} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => {setMenu("menu"); navigate('/#explore-menu')}} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <a onClick={() => { setMenu("orders"); handleOrder() }} className={menu === "orders" ? "active" : ""}>Orders</a>
                    <a onClick={() => {setMenu("contact-us"); navigate('/contactus')}} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    <div className="navbar-search-icon">
                        <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
                        : <div className='navbar-profile'>
                            <img src={assets.profile_icon} alt="" />
                            <ul className="navbar-profile-dropdown">
                                <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        );
    };

    export default Navbar;
