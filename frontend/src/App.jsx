import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import ContactUS from './pages/ContactUs/ContactUs'
//import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/cart' element={<Cart setShowLogin={setShowLogin}/>} />
          < Route path='/order' element={<PlaceOrder />} />
          < Route path='/verify' element={<Verify />} />
          < Route path='/myorders' element={<MyOrders />} />
          < Route path='/contactus' element={<ContactUS />}/>
        </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App
