import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Category2 from './components/category/Category2'
import Service from './components/services/Service'
import Banner from './components/banner/Banner'
import headphone from './assets/hero/head.png'
import watchbanner from './assets/products/watchbanner.png' 
import Products from './components/products/Products'
import Blog from './components/blogs/Blog'
import Footer from './components/footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/navbar/home/Home'
import Shop from './components/navbar/shop/Shop'
import About from './components/navbar/about/About'
import Blogs from './components/navbar/blog/Blogs'
import Notfound from './components/navbar/notfound/Notfound'

const BannerData={
  discount:"30% OFF",
  title:"Fine Smile",
  date:"3 Oct to 31 Oct",
   image:headphone,
  title2: "Air Solo Bass",
  title3:"Summer Sale",
  title4:" Get ready to soak up the savings! Eshop is excited to announce our Summer Sale, where you can enjoy up to 50% off on a wide range of products!",
  bgColor:"#f42c37"
}

const BannerData2={
  discount:"30% OFF",
  title:"Happy Hours",
  date:"3 Oct to 31 Oct",
   image:watchbanner,
  title2: "Smart Solo",
  title3:"Summer Sale",
  title4:" Get ready to celebrate the season with sizzling deals at Eshop! Our Summer Sale is now live, bringing you incredible discounts on the hottest products!",
  bgColor:"#2dcc6f"
}
const App = () => {

  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100
        // once:true,
        // mirror:false,
        // anchorPlacement:"top-bottom"
      }
    );
    AOS.refresh()
  },[])
  return (
    <>

    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={
        <>
        <Home/>
        <Hero />
   <Category/>
   <Category2/>
  <Service/>
  <Banner data={BannerData}/>
  <Products/>
  <Banner data={BannerData2}/>
  <Blog/>
        </>
      }/>
   
  {/* <Partner/> */}
 
     
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blogs"  element={<Blogs/>}/>
       <Route path="*" element={<Notfound/>}/>
    </Routes>
   
    <Footer/>
     
  </BrowserRouter>
</>
  )
}

export default App
