import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import PricingCard from '../components/PricingCard'
import WorkCard from '../components/WorkCard'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of most recent work"/>
     <WorkCard/>
      <PricingCard/>
      <Footer/>
      
    </div>
  )
}

export default Project;
