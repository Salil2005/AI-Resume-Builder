import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/features'
import Aboutus from '../components/home/Aboutus'
import Title from '../components/home/Title'
import CalltoAction from '../components/home/CalltoAction'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'

const Home = () => {



  return (
    <div>


      <Navbar />
      <Banner />
      <Hero />
      <Features />
      <Aboutus />
      <CalltoAction />
      <Footer />
    </div>
  )
}

export default Home
