import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero h1={"Welcome to Our Website"} para={"We create modern solutions for your digital needs."} button={"Get Stared"}/>
      <About aboutTitle={"About Us"} aboutPara={"We are a passionate team of developers and designers, dedicated to building clean, modern, and functional websites that help businesses grow."}/>
      <div className='cardContainer'>
        <Cards cardTitle={"Web Design"} cardPara={"Beautiful, user-friendly designs that captivate your audience."}/>
        <Cards cardTitle={"Development"} cardPara={"Clean and scalable code for all types of web applications. "}/>
        <Cards cardTitle={"SEO Optimization"} cardPara={"Boost your search rankings and attract more visitors."}/>
      </div>
      <Footer copyrightText={"@ 2025 My Landing Page. All Right Reserved"} contactInfo={"Contact: info@example.com"}/>
    </div>
  )
}

export default App
