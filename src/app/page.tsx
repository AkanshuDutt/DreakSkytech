import React from 'react'
import Banner from "../components/banner"
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import Projects from "@/app/Project/page"
import Team from "@/app/Team/page"
import Technology from './TechSolutionsPage/page'


const Home = () => {
  return (
<div style={{ backgroundColor: '#111828' }}>     
   <Header />
      <Banner />
      <Projects/>
      <Team/>
      <Technology/>
      <Footer />
    </div>
  )
}

export default Home

